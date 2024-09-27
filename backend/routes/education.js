const express = require("express");
const router = express.Router();
const Education = require("../models/education");

// CREATE new education entries
router.post("/", async (req, res) => {
  try {
    const newEducations = req.body.map((edu) => new Education(edu)); // Create instances for each education entry
    await Education.insertMany(newEducations); // Use insertMany to save multiple education documents
    res.status(201).json(newEducations);
  } catch (error) {
    res.status(500).json({ message: "Error creating education", error });
  }
});

// READ all education entries
router.get("/", async (req, res) => {
  try {
    const educations = await Education.find();
    res.status(200).json(educations);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving education entries", error });
  }
});

module.exports = router;
