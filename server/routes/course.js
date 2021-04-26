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
    Course.find({domain:domainId}).populate('domain', 'domain_name domain_description -_id').select('-author -total_enrollments -course_banner -__v')
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

router.get('/search/course', (req, res)=>{
    const searchQuery = req.query.courseName;
    Course.find({course_name:{$regex:searchQuery, $options: 'i'}}).select('-__v -author -course_banner -course_description -total_enrollments -domain')
    .then( data => res.json(data))
    .catch( err => console.log(err))
})

router.get('/author/:id', (req, res)=>{
    const courseId = req.params.id;
    Course.findById(courseId).populate('author', '-_id author_name author_email').select('-__v -domain -course_name -course_banner -course_description -course_photo -total_enrollments')
    .then( data => res.json(data))
    .catch( err => console.log(err))
})

router.post('/incrementEnroll/:id', (req, res) => {
    const courseId = req.params.id;
    Course.findOneAndUpdate({_id: courseId},{$inc:{'total_enrollments':1}})
    .exec(function(err) { 
        if (err) { 
          console.log(err); 
        } 
        else { 
          res.send('Success') 
        }})
})

module.exports =router