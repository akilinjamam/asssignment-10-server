const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');

const app = require("./app");

// Database:
const database = module.exports = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2gfgxwp.mongodb.net/?retryWrites=true&w=majority`, connectionParams);
        console.log('Database connected successfully yeah...')
    } catch (error) {
        console.log('database connection falied');
    }
}

// server

database();


const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`app is running on port : ${port}`.blue.bold);
})
