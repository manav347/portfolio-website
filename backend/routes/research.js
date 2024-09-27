const express = require("express");
const router = express.Router();
const Research = require("../models/research");

// CREATE multiple new research entries
router.post("/", async (req, res) => {
  try {
    const researchEntries = req.body; // Expecting an array of research entries
    if (!Array.isArray(researchEntries)) {
      return res
        .status(400)
        .json({ message: "Expected an array of research entries" });
    }

    const newResearchEntries = await Research.insertMany(researchEntries);
    res.status(201).json(newResearchEntries);
  } catch (error) {
    res.status(500).json({ message: "Error creating research entries", error });
  }
});

// READ all research entries
router.get("/", async (req, res) => {
  try {
    const research = await Research.find();
    res.status(200).json(research);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving research entries", error });
  }
});

module.exports = router;
