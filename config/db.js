require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        console.log('Connecting to MongoDB with URI:', (process.env.MONGO_URI));
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.log("❌ Error connecting to MongoDB", error);
        process.exit(1);
    }
}

module.exports = connectDB;
