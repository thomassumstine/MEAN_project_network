const mongoose = require('mongoose');

const Network_Schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [
      2,
      "{PATH} must be at least {MINLENGTH} characters."
    ]
  },
  description: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [
        2,
        "{PATH} must be at least {MINLENGTH} characters."
      ]
  },
  notes: {
    type: String
  },
  status: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [
        2,
        "{PATH} must be at least {MINLENGTH} characters."
      ]
  },
  links: {
    type: String
  }

}, { timestamps: true });

mongoose.model('Network', Network_Schema);