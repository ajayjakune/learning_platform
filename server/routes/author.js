const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Author = mongoose.model('Author')

router.post('/author', (req,res) => {
    const author = new Author({author_name:req.body.authorName});
    author.save()
    .then( result => res.json(result))
    .catch( err => console.log(err));
})

module.exports = router