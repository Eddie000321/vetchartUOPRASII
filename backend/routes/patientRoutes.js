// backend/routes/patientRoutes.js

// Import the Express library
const express = require("express");
// Import the PrismaCleient from db.js
const prisma = require("../prisma/db");

// Create an instance of the Express Router
const router = express.Router();

// patient-related API endpoint logic will go here

// Export the router so oour main server.js file can use it
module.exports = router;
