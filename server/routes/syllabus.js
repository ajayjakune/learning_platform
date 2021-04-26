const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Syllabus = mongoose.model('Syllabus')

router.post('/syllabus/add', (req, res)=>{
    const newSyllabus = new Syllabus({course: req.body.courseId,
                                        syllabus: req.body.syllabus});

    newSyllabus.save()
    .then( syllabus => res.json(syllabus))
    .catch( err => console.log(err));
})

router.get('/syllabus/:id', (req, res)=>{
    const courseId = req.params.id;
    Syllabus.findOne({course: courseId}).select('-_id -__v')
    .then(syllabus => res.json(syllabus))
    .catch(err => console.log(err));
})


module.exports =router