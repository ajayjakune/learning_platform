const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Course = mongoose.model('Course')

router.post('/course/add', (req, res) => {
    const course = new Course({domain_id: req.body.domainId,
                                author_id: req.body.authorId,
                                course_name: req.body.courseName,
                                course_description: req.body.cousreDescription})

    course.save()
    .then( course => res.json(course))
    .catch( err => console.log(err));
})

router.get('/course/:id', (req,res) => {
    const domainId = req.params.id;
    Course.findOne({domain_id:domainId}).populate('author_id','author_name').populate('domain_id','domain_name').select('-domain_id._id -author_id._id')
    .then( courses => res.json(courses))
    .catch( err => console.log(err))
})

module.exports =router