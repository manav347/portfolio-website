const express = require("express");
const router = express.Router();
const Coursework = require("../models/coursework");

// CREATE new coursework entries
router.post("/", async (req, res) => {
  try {
    const newCourseworks = req.body.map((course) => new Coursework(course)); // Create instances for each entry
    await Coursework.insertMany(newCourseworks); // Use insertMany to save multiple documents
    res.status(201).json(newCourseworks);
  } catch (error) {
    res.status(500).json({ message: "Error creating coursework", error });
  }
});

// READ all coursework
router.get("/", async (req, res) => {
  try {
    const coursework = await Coursework.find();
    res.status(200).json(coursework);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving coursework", error });
  }
});

module.exports = router;
