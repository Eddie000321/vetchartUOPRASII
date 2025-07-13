// backend/routes/patientRoutes.js

const express = require('express');
const prisma = require('../prisma/db');

const router = express.Router();

// URL: POST /api/patients
// Creates a new patient and links them to an existing owner.
router.post('/', async (req, res) => {
  // 1. Get the data from the incoming request's body.
  // We include 'birthdate' as an optional field.
  const { name, species, birthdate, status, ownerId } = req.body;

  // 2. Validate that the essential data was provided.
  if (!name || !ownerId) {
    return res.status(400).json({ 
      error: 'Patient name and ownerId are required.' 
    });
  }

  try {
    // 3. Use Prisma to create the new patient in the database.
    const newPatient = await prisma.patient.create({
      data: {
        name: name,
        species: species,
        status: status,
        // If birthdate is provided, convert it to a Date object. Otherwise, null.
        birthdate: birthdate ? new Date(birthdate) : null,
        
        // This is a "nested write". It tells Prisma to also create
        // a new record in the 'OwnersOnPatients' table to link this
        // new patient to the owner specified by 'ownerId'.
        owners: {
          create: {
            // We use parseInt to ensure ownerId is a number.
            ownerId: parseInt(ownerId),
          },
        },
      },
      // After creating, 'include' tells Prisma to also fetch the
      // related owner data and return it in the response. This is
      // useful for confirming the link was made correctly.
      include: {
        owners: {
          include: {
            owner: true, // Include the full owner details
          },
        },
      },
    });

    // 4. If creation is successful, send a 201 "Created" status
    //    and the data for the newly created patient.
    res.status(201).json(newPatient);

  } catch (error) {
    // 5. If an error occurs, log it for debugging and send a
    //    500 "Internal Server Error" response to the client.
    //    This could happen if, for example, the 'ownerId' does not
    //    exist in the 'Owner' table.
    console.error("Failed to create patient:", error);
    res.status(500).json({ error: 'Unable to create patient.' });
  }
});

module.exports = router;