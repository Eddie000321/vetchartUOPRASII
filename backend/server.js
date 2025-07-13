console.log("Script start");

const express = require("express");
console.log("Express imported");

const ownerRoutes = require("./routes/ownerRoutes");
console.log("Owner routes imported");

const patientRoutes = require("./routes/patientRoutes");
console.log("Patient routes imported");

const app = express();
console.log("Express app created");

app.use(express.json());
console.log("JSON middleware configured");

app.use("/api/owners", ownerRoutes);
console.log("Owner routes configured");

app.use("/api/patients", patientRoutes);
console.log("Patient routes configured");

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

console.log("Attempting to start server...");