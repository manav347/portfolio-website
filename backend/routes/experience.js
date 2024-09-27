const express = require("express");
const router = express.Router();
const Experience = require("../models/experience");

// CREATE new experience entries
router.post("/", async (req, res) => {
  try {
    const newExperiences = req.body.map((exp) => new Experience(exp)); // Create instances for each entry
    await Experience.insertMany(newExperiences); // Use insertMany to save multiple documents
    res.status(201).json(newExperiences);
  } catch (error) {
    res.status(500).json({ message: "Error creating experience", error });
  }
});

// READ all experiences
router.get("/", async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving experiences", error });
  }
});

module.exports = router;
