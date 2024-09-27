const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema({
  field: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("skills", skillsSchema);
