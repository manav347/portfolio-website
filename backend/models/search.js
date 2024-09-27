const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema(
  {
    query: { type: String, required: true }, // The search query made by the user
    resultCount: { type: Number }, // Number of results returned for the query
    results: [String], // Array of result links or details
  },
  { timestamps: true }
);

module.exports = mongoose.model("Search", searchSchema);
