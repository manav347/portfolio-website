const express = require("express");
const router = express.Router();
const Search = require("../models/search");

// CREATE a new search query entry
router.post("/", async (req, res) => {
  try {
    const newSearch = new Search(req.body);
    await newSearch.save();
    res.status(201).json(newSearch);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating search query entry", error });
  }
});

// READ all search query entries
router.get("/", async (req, res) => {
  try {
    const searchQueries = await Search.find();
    res.status(200).json(searchQueries);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving search queries", error });
  }
});

module.exports = router;
