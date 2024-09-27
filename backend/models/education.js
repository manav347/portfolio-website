const mongoose = require("mongoose");
const { Schema } = mongoose;

const educationSchema = new Schema({
  school: { type: String, required: true },
  degree: { type: String, required: true },
  fieldOfStudy: { type: String },
  startYear: { type: String, required: true },
  endYear: { type: String },
  description: { type: String },
});

const Education = mongoose.model("Education", educationSchema);

module.exports = Education;
