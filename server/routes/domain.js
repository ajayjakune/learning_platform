const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const Domain = mongoose.model('Domain')
const CourseEnrolled = mongoose.model('CourseEnrollment')
const requireLogin = require('../middleware/requireLogin');


router.post('/domain', (req, res) => {
    const {domainName, domainDescription, domainPhoto} = req.body;
    const domain = new Domain({domain_name: domainName,
                                domain_description: domainDescription,
                                domain_photo: domainPhoto});
    domain.save()
    .then( result => res.json(result))
    .catch( err => console.log(err));
} )


router.get('/domain/all', (req, res) => {
    Domain.find().select('-__v')
    .then( domains => res.send(domains))
    .catch( err => console.log(err));
} )


router.get('/profileChart',requireLogin , (req, res) => {
  const userId = req.user._id;
  CourseEnrolled.find({ userid: userId })
    .populate({
      path: 'courseid',
      populate: { path: 'domain' },
    }).select('-isCompleted -_id -__v -userid -date_of_enrollment ')
    .then((result) => {
      const mset = new Set();
      result.filter(obj => mset.has(obj.courseid.domain.domain_name) ? false : mset.add(obj.courseid.domain.domain_name));
      let totalTime = {}; 
      mset.forEach(ele => totalTime[ele]=0);
      result.map(obj => totalTime[obj.courseid.domain.domain_name] += 1)
      res.json(totalTime)
    })
    .catch((e) => console.log(e));
});

module.exports = router