const { PrismaClient } = require("@prisma/client");

// Init a single instance of Prisma Client
const prisma = new PrismaClient();

// Export the instance to be used in other parts of the application
module.exports = prisma;
