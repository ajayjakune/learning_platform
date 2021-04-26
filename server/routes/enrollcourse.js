const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const CourseEnrollment = mongoose.model("CourseEnrollment");


router.post("/enroll", requireLogin, (req, res) => {
  const { userid, courseid } = req.body;
  const enrollment = new CourseEnrollment({
    userid,
    courseid,
    date_of_enrollment: Date(),
  });

  CourseEnrollment.findOne({ userid, courseid })
    .then((course) => {
      if (!course) {
        enrollment
          .save()
          .then(() => {
            res.json({
              status: "success",
            });
          })
          .catch((e) => {
            res.send(e);
          });
      } else {
        res.json({
          status: "failed",
        });
      }
    })
    .catch((e) => {
      res.send(e);
    });
});
module.exports = router;
