//Importing mongoose
const mongoose = require('mongoose');

//defining schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//giving name to schema
mongoose.model('User', userSchema);
