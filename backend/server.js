const express = require("express");
const prisma = require("./prisma/db");

const app = express();
app.use(express.json());
