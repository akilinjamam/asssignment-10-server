const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');

const app = require("./app");

// Database:
const database = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

    mongoose.connect(`${process.env.DB_CONNECTION_URI}`, connectionParams);
    console.log('Database connected successfully yeah...')

}

// server

database();


const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`app is running on port : ${port}`.blue.bold);
})
