const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Course = mongoose.model('Course')

router.post('/course/add', (req, res) => {
    const newCourse = new Course({domain: req.body.domain,
                                author: req.body.author,
                                course_name: req.body.courseName,
                                course_description: req.body.courseDescription,
                                course_banner: req.body.courseBanner,
                                course_photo: req.body.coursePhoto})

    newCourse.save()
    .then( course => res.json(course))
    .catch( err => console.log(err));
})

router.get('/:id/courses', (req,res) => {
    const domainId = req.params.id;
    Course.find({domain:domainId}).populate('domain', 'domain_name -_id').select('-author -total_enrollments -course_banner -__v')
    .then( courses => res.json(courses))
    .catch( err => console.log(err))
})

router.get('/course/:id', (req, res) => {
    const courseId = req.params.id;
    Course.findById(courseId).populate('author','-_id author_name').populate('domain','-_id domain_name')
    .select('-__v')
    .then( course => res.json(course))
    .catch( err => console.log(err))
})

module.exports =router