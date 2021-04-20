//importing packages
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
//const crypto = require('crypto');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys');

//hitting protected route

//sign up : method-post
router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  //Enter all necessary fields
  if (!email || !password || !name) {
    return res.status(422).json({ error: 'Please add all mandatory fields' });
  }

  //check if user already present
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: 'User already exist with entered email' });
      }

      //hashing passeord with level 12
      bcrypt.hash(password, 12).then((hasedPassword) => {
        const user = new User({
          email,
          password: hasedPassword,
          name,
        });

        //saving user to database
        user
          .save()
          .then((user) => {
            res.json({ message: 'Saved successfully' });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//sign-in : method-post

router.post('/signin', (req, res) => {
  const { email, password } = req.body;
  //add all mandatory fields
  if (!email || !password) {
    return res.status(422).json({ error: 'Please add email or password' });
  }

  //check if user present in database or not
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: 'Invalid email or password' });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          //found user with email and password
          //Assigning token to the user for session management
          const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
          const { _id, name, email } = savedUser;
          res.json({
            token,
            user: { _id, name, email },
          });
          //res.json({message:"Signed in successfully"});
        } else {
          return res.status(422).json({ error: 'Invalid email or password' });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;
