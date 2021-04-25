const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const CourseEnrollment = mongoose.model("CourseEnrollment");
const reqireLogin = require("../middleware/requireLogin");

router.get("/user/:id", reqireLogin, (req, res) => {
  const id = String(req.params.id);
  var enrolledCourses;
  CourseEnrollment.find({ userid: id })
    .select("courseid")
    .then((courses) => {
      enrolledCourses = courses;
    });
  //console.log(enrolledCourses);

  User.findOne({ _id: id })
    .then((user) =>
      res.send({
        user,
        enrolledCourses,
      })
    )
    .catch((err) => console.log(err));
});

module.exports = router;
