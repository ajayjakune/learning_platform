const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const CourseEnrollment = mongoose.model("CourseEnrollment");
// const reqireLogin = require("../middleware/requireLogin");

router.get("/user/:id", (req, res) => {
  const id = String(req.params.id);
  CourseEnrollment.find({ userid: id }).select("courseid isCompleted").populate('courseid', 'course_name course_photo')
    .then((courses) => {
      User.findOne({ _id: id })
      .then((user) => 
        res.send({
          user,
          courses,
        })
      )
      .catch((err) => console.log(err));
    })
  // console.log(enrolledCourses);
});

module.exports = router;
