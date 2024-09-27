// models/project.js

const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  technologies: {
    type: [String],
    required: true,
  },
  picUrl: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  startDate: {
    type: String, // Use String to match date format, or Date if using Date objects
    required: true,
  },
  endDate: {
    type: String, // Use String to match date format, or Date if using Date objects
    required: true,
  },
  affiliation: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
