//Importing packages
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
//const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys');
const reqireLogin = require('../middleware/requireLogin');

//Trial protected resource route

router.get('/protected', reqireLogin, (req, res) => {
  console.log('Accessed protected route');
  res.send(req.user);
});

//signup     method:post
router.post('/signup', (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  if (!email || !password || !firstName || !lastName) {
    return res.status(422).json({ error: 'Please add all the fields' });
  }
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: 'User already exists with inputted email' });
      }
      bcrypt.hash(password, 12).then((hashedpassword) => {
        let today = new Date();
        let date =
          today.getFullYear() +
          '-' +
          (today.getMonth() + 1) +
          '-' +
          today.getDate();
        let time =
          today.getHours() +
          ':' +
          today.getMinutes() +
          ':' +
          today.getSeconds();
        let dateTime = date + ' ' + time;
        const user = new User({
          email,
          password: hashedpassword,
          first_name: firstName,
          last_name: lastName,
          last_login: dateTime,
        });

        user
          .save()
          .then(() => {
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

//signin   method:post

router.post('/signin', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: 'Please add email or password' });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: 'Invalid Email or Password' });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          // res.json({ message: 'Successfully Signed In' });
          //Token which used for session management
          const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
          const { _id, email1, first_name, last_name, last_login, profile_photo } = savedUser;
          let today = new Date();
          let date =
            today.getFullYear() +
            '-' +
            (today.getMonth() + 1) +
            '-' +
            today.getDate();
          let time =
            today.getHours() +
            ':' +
            today.getMinutes() +
            ':' +
            today.getSeconds();
          let dateTime = date + ' ' + time;
          User.findByIdAndUpdate(
            { _id },
            { last_login: dateTime },
            { new: true }
          ).exec((err, result) => {
            if (err) {
              return res.json(err);
            }
            res.json({
              token,
              user: { _id, first_name, last_name, email1, last_login, profile_photo },
            });
          });
        } else {
          return res.status(422).json({ error: 'Invalid Email or Password' });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;
