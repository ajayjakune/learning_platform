const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const Domain = mongoose.model('Domain')


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

module.exports = router