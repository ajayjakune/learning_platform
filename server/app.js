//Importing packages
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;
const { MONGOURI } = require('./config/keys');

//connecting to database
mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

//Connection
mongoose.connection.on('connected', () => {
  console.log('connected to Mongo Database');
});

mongoose.connection.on('error', (err) => {
  console.log('Error while connecting', err);
});

//Exposing routes to express
require('./models/user');
app.use(express.json());
app.use(require('./routes/auth'));

//Listening to port
app.listen(PORT, (err) => {
  if (err) {
    console.log('Server not starting: ', err);
  } else {
    console.log('Server listening port on ', PORT);
  }
});
