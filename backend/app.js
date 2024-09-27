const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables
const cors = require("cors");

const app = express();

// Import routes
const contactRoutes = require("./routes/contact");
const courseworkRoutes = require("./routes/coursework");
const experienceRoutes = require("./routes/experience");
const researchRoutes = require("./routes/research");
const searchRoutes = require("./routes/search");
const projectRoutes = require("./routes/project");
const educationRoutes = require("./routes/education");
const skillsRouter = require("./routes/skills");

// Middleware setup
app.use(express.json()); // Parse JSON request bodies
app.use(cors());

// Use the routes under their respective paths
app.use("/contact", contactRoutes);
app.use("/coursework", courseworkRoutes);
app.use("/experience", experienceRoutes);
app.use("/research", researchRoutes);
app.use("/search", searchRoutes);
app.use("/project", projectRoutes);
app.use("/education", educationRoutes);
app.use("/skills", skillsRouter);

// Connect to MongoDB using the URI from .env
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Define basic routes
app.get("/", (req, res) => {
  res.send("Hello, this is the backend of your portfolio.");
});

module.exports = app;
