// models/about.js

const mongoose = require("mongoose");
const { Schema } = mongoose;

const aboutSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  bio: {
    type: String,
    required: true,
    trim: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  experience: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const About = mongoose.model("About", aboutSchema);

module.exports = About;
