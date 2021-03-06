const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Question = mongoose.model('Question');
const QuestionsPerCourse = mongoose.model('QuestionsPerCourse');
const CourseEnrollment = mongoose.model("CourseEnrollment");
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
      ).exec((err, result1) => {
        if (err) {
          return res.json(err);
        }
        res.json(result1);
      });
    })
    .catch((err) => console.log(err));
});

//getting test questions
router.get('/:courseId/test', requireLogin, (req, res) => {
  const courseId = req.params.courseId;
  Test.findOne({ course: courseId, user: req.user._id }).then((userData) => {
    if (userData.isPassed === true) {
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
router.put('/:courseId/test', requireLogin, (req, res) => {
  const courseId = req.params.courseId;
  const userId = req.user._id;

  Test.findOne({ course: courseId, user: userId })
    .then((savedUserWIthCourse) => {
      if (savedUserWIthCourse.isPassed === true) {
        return res.json({
          msg: 'Already given test',
          userDetails: savedUserWIthCourse,
        });
      } else {
        const { isPassed, score } = req.body;
        Test.findOneAndUpdate(
          { course: courseId, user: userId },
          {
            $set:
            {
              isPassed: isPassed,
              score: score,
            }
          }, { new: true }
        ).exec((err, result) => {
          if (err) {
            return res.status(422).json({ error: err });
          } else {
            CourseEnrollment.findOneAndUpdate({ courseid: courseId, userid: userId },{$set:{'isCompleted': isPassed}})
            .exec(function(error) { 
                if (error) { 
                  console.log(error); 
                } 
                else { 
                  res.send('Success') 
                }})
          }
        })



        // const newUserTest = new Test({
        //   course: courseId,
        //   user: userId,
        //   isPassed: Boolean(isPassed),
        //   score: Number(score),
        //   isTakenTest: true,
        // });
        // newUserTest
        //   .save()
        //   .then((savedUser) => res.json(savedUser))
        //   .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
});

//pending assignments
router.get('/pendingassignments', requireLogin, (req, res) => {
  const userId = req.user._id;
  Test.find({ user: userId, isPassed: false })
    .select('course')
    .populate('course')
    .then((courses) => {
      res.json(courses);
    });
});

module.exports = router;
