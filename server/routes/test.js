const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Question = mongoose.model('Question');
const QuestionsPerCourse = mongoose.model('QuestionsPerCourse');
const Test = mongoose.model('Test');
const requireLogin = require('../middleware/requireLogin');

//Adding questions to course
router.post('/addquestion', (req, res) => {
  const { questionDescription, optionsArr, correctAnswer, courseId } = req.body;
  let queId = undefined;
  //const body = JSON.parse(req.body);
  //res.json(req.body);
  //console.log(optionsArr, typeof optionsArr);
  const question = new Question({
    question: questionDescription,
    options: optionsArr,
    correct_answer: correctAnswer,
    course: courseId,
  });
  question
    .save()
    .then((result) => {
      //res.json(result);
      //console.log(result);
      queId = result._id;
      console.log(queId);
      console.log(courseId);
      QuestionsPerCourse.findOneAndUpdate(
        { course: courseId },
        {
          $push: { questions: queId },
        },
        {
          new: true,
        }
      ).exec((err, result) => {
        if (err) {
          return res.json(err);
        }
        res.json(result);
      });
    })
    .catch((err) => console.log(err));
});

//getting test questions
router.get('/:courseId/test', requireLogin, (req, res) => {
  const courseId = req.params.courseId;
  Test.findOne({ course: courseId, user: req.user._id }).then((userData) => {
    if (userData) {
      return res.json({
        message: 'You already attempted test',
        score: userData.score,
        isPassed: userData.isPassed,
      });
    } else {
      QuestionsPerCourse.find({ course: courseId })
        .populate('questions')
        .then((result) => res.json(result))
        .catch((err) => console.log(err));
    }
  });
});

//After test given submit button
router.post('/:courseId/test', requireLogin, (req, res) => {
  const courseId = req.params.courseId;
  const userId = req.user._id;

  Test.findOne({ course: courseId, user: userId })
    .then((savedUserWIthCourse) => {
      if (savedUserWIthCourse) {
        return res.json({
          msg: 'Already given test',
          userDetails: savedUserWIthCourse,
        });
      } else {
        const { isPassed, score } = req.body;
        const newUserTest = new Test({
          course: courseId,
          user: userId,
          isPassed: Boolean(isPassed),
          score: Number(score),
          isTakenTest: true,
        });
        newUserTest
          .save()
          .then((savedUser) => res.json(savedUser))
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
});

//pending assignments
router.get('/pendingassignments', requireLogin, (req, res) => {
  const userId = req.user._id;
  Test.find({ user: userId, isTakenTest: false })
    .select('course')
    .populate('course')
    .then((courses) => {
      res.json(courses);
    });
});

//completed courses
router.get('/pendingassignments', requireLogin, (req, res) => {
  const userId = req.user._id;
  Test.find({ user: userId, isTakenTest: true })
    .select('course')
    .populate('course')
    .then((courses) => {
      res.json(courses);
    });
});

module.exports = router;
