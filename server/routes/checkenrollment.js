const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const CourseEnrollment = mongoose.model("CourseEnrollment");

router.post("/checkenrollment", requireLogin, (req, res) => {
  const { userid, courseid } = req.body;
  CourseEnrollment.findOne({ userid, courseid })
    .then((course) => {
      if (course) {
        res.json({
          status: true,
        });
      } else {
        res.json({
          status: false,
        });
      }
    })
    .catch((e) => {
      res.json({
        status: false,
      });
    });
});

router.get('/enroll/:id', (req,res)=>{
  CourseEnrollment.find({userid:req.params.id})
  .then( result => res.json(result))
  .catch( err => console.log(err))
})

module.exports = router;
