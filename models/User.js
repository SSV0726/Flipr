const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  bgcolor: {
    type: String,
    default: "White"
  },
  archive : {
    type: Number,
    default : 0
  }
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  content : [taskSchema]
  
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
