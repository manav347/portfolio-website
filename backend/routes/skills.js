const express = require("express");
const router = express.Router();
const Skill = require("../models/skills"); // Assuming the skills model is in ../models/skills

// CREATE multiple new skill entries
router.post("/", async (req, res) => {
  try {
    const skillEntries = req.body; // Expecting an array of skill entries
    if (!Array.isArray(skillEntries)) {
      return res
        .status(400)
        .json({ message: "Expected an array of skill entries" });
    }

    const newSkillEntries = await Skill.insertMany(skillEntries);
    res.status(201).json(newSkillEntries);
  } catch (error) {
    res.status(500).json({ message: "Error creating skill entries", error });
  }
});

// READ all skill entries
router.get("/", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving skill entries", error });
  }
});

module.exports = router;
