// backend/routes/ownerRoutes.js

const express = require('express');
const prisma = require('../prisma/db');

const router = express.Router();

// --- Create a New Owner ---
// URL: POST /api/owners
router.post('/', async (req, res) => {
  // Get owner data from the request body
  const { name, address, email, phone } = req.body;

  // A name is essential
  if (!name) {
    return res.status(400).json({ error: 'Owner name is required.' });
  }

  try {
    const newOwner = await prisma.owner.create({
      data: {
        name,
        address,
        email,
        phone,
      },
    });
    // Respond with 201 (Created) and the new owner's data
    res.status(201).json(newOwner);
  } catch (error) {
    // Handle potential errors, e.g., if the email is not unique
    console.error("Failed to create owner:", error);
    res.status(500).json({ error: 'Unable to create owner.' });
  }
});

module.exports = router;
