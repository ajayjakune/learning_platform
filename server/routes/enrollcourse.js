const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const CourseEnrollment = mongoose.model('CourseEnrollment');
const Syllabus = mongoose.model('Syllabus');
const Test = mongoose.model('Test');


router.post('/enroll', requireLogin, (req, res) => {
  const { userid, courseid } = req.body;
  Syllabus.findOne({course:courseid})
  .then( data =>{
    let syllabusArray = data.syllabus
    let allTopics = syllabusArray.map( chapter => chapter.lectures.map( topic => topic.title));
    let arr = allTopics.map( obj => obj.map(title => {return {'title' : title, 'isCompleted':false}}) )

    const enrollment = new CourseEnrollment({
      userid,
      courseid,
      date_of_enrollment: Date(),
      courseTopics: arr
    });
  
    CourseEnrollment.findOne({ userid, courseid })
      .then((course) => {
        if (!course) {
          enrollment
            .save()
            .then(() => {
              const userData = new Test({
                user: userid,
                course: courseid,
              });
              userData.save().then(() => {
                res.json({
                  status: 'success',
                });
              });
            })
            .catch((e) => {
              res.send(e);
            });
        } else {
          res.json({
            status: 'failed',
          });
        }
      })
      .catch((e) => {
        res.send(e);
      });
  }).catch( err => console.log(err));
});


router.get('/checkTopicStatus/:id', requireLogin, (req, res) => {
  const courseid = req.params.id;
  const userid = req.user._id;

  CourseEnrollment.findOne({courseid, userid}).select('courseTopics -_id')
  .then(data => res.json(data))
  .catch( err => console.log(err))
})

router.put('/updateTopicStatus/:id', requireLogin, (req, res) => {
  const courseid = req.params.id;
  const userid = req.user._id;
  
  CourseEnrollment.findOne({courseid, userid}).select('courseTopics')
  .then( data => {
    data.courseTopics[Number(req.body.chapterIndex)][Number(req.body.topicIndex)].isCompleted = true;
    CourseEnrollment.findOneAndUpdate({courseid, userid},{$set:{'courseTopics': data.courseTopics}})
    .exec(function(error) { 
      if (error) { 
        console.log(error); 
      } 
      else { 
        res.send('Success') 
      }})
  })
  .catch(err => console.log(err))
})


module.exports = router;
