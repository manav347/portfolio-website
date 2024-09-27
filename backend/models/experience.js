const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    position: { type: String, required: true },
    duration: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Experience", experienceSchema);
