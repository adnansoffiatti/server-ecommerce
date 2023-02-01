require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3333;
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const routes = require('./routes');

// configurando o banco de dados
const connectToDatabase = async () => {
    mongoose.set("strictQuery", false);

    await mongoose.connect(
        process.env.MONGO_URI,
        console.log("Connected to database")
    );
};
connectToDatabase();

app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(PORT, () => console.log("Server running"));
