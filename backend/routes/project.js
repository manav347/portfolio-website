const express = require("express");
const router = express.Router();
const Project = require("../models/project");

// CREATE multiple new project entries
router.post("/", async (req, res) => {
  try {
    const projectEntries = req.body; // Expecting an array of project entries
    if (!Array.isArray(projectEntries)) {
      return res
        .status(400)
        .json({ message: "Expected an array of project entries" });
    }

    const newProjects = await Project.insertMany(projectEntries);
    res.status(201).json(newProjects);
  } catch (error) {
    res.status(500).json({ message: "Error creating project entries", error });
  }
});

// READ all project entries
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving project entries", error });
  }
});

// READ project by _id
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(project);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving project details", error });
  }
});

module.exports = router;
