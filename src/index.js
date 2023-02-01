require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3333;
const mongoose = require("mongoose");

const app = express();

const connectToDatabase = async () => {
    mongoose.set('strictQuery', false);

    await mongoose.connect(process.env.MONGO_URI, console.log("Connected to database"));
}
connectToDatabase();

app.listen(PORT, () => console.log("Server running"));
