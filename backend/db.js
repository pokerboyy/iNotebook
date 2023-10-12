const mongoose = require('mongoose');

// Define the MongoDB connection URL
const dbUrl = 'mongodb+srv://preritchauhan123:V7Q17dIAw8mJgCnP@cluster0.zrp7mcp.mongodb.net/';

// Function to establish the database connection
async function connectToDatabase() {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Export the function for establishing the database connection
module.exports = connectToDatabase;

