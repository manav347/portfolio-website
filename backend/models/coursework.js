const mongoose = require("mongoose");

const courseworkSchema = new mongoose.Schema(
  {
    courseName: { type: String, required: true },
    institution: { type: String },
    year: { type: Number },
  },
  { timestamps: true }
); // Automatically adds createdAt and updatedAt fields

module.exports = mongoose.model("Coursework", courseworkSchema);
