// test.js

require("dotenv").config(); // Load environment variables from .env file
const mongoose = require("mongoose");

// Import your models
const Contact = require("./models/contact");
const Project = require("./models/project");
const About = require("./models/about");
const Service = require("./models/service");

// Get the MongoDB URI from environment variables
const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected successfully");
    // Test Contact schema
    return Contact.create({
      name: "Nav",
      email: "Nav.doe@example.com",
      message: "This is a test message",
    });
  })
  .then((contact) => {
    console.log("Contact created:", contact);
    // Test Project schema
    return Project.create({
      title: "Test Project",
      description: "This is a test project",
      technologies: ["JavaScript", "Node.js", "MongoDB"],
      url: "http://example.com",
    });
  })
  .then((project) => {
    console.log("Project created:", project);
    // Test About schema
    return About.create({
      name: "Nav",
      bio: "A brief biography about John Doe.",
      skills: ["JavaScript", "React", "Node.js"],
      experience: ["Software Developer at XYZ Corp", "Intern at ABC Inc"],
    });
  })
  .then((about) => {
    console.log("About Me created:", about);
    // Test Service schema
    return Service.create({
      serviceName: "Web Development",
      description: "Full-stack web development services.",
      price: 1000,
    });
  })
  .then((service) => {
    console.log("Service created:", service);
    // Verify that all documents are created
    return Promise.all([
      Contact.find({}),
      Project.find({}),
      About.find({}),
      Service.find({}),
    ]);
  })
  .then(([contacts, projects, abouts, services]) => {
    console.log("All contacts:", contacts);
    console.log("All projects:", projects);
    console.log("All About Me:", abouts);
    console.log("All services:", services);
    return mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Error:", err);
  });
