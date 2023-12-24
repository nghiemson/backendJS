require("dotenv").config();
const connectToDatabase = require("./db/connect");

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        console.log("Connecting to db...");
        await connectToDatabase(process.env.MONGO_URI);
        console.log("Connected todb");
        console.log("Starting server...");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();