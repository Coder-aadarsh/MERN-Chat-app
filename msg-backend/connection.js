const mongoose = require('mongoose');
require('dotenv').config();

async function connectToDatabase() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@chat-app.z5u8r0j.mongodb.net/?retryWrites=true&w=majority`);
        console.log('Connected to MongoDB');
        //Here env and process.env.var-name  - helps to insert the username and pass of mongoose database
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToDatabase();
