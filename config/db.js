const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI, {});
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }
};

module.exports = connectDB;
