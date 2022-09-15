const express = require('express');
const mongoose = require('mongoose');
const joi = require('joi');
require('dotenv').config();
const connectDB = require('./connectDB.js');
connectDB;


const app = express();
app.get('/home', (req, res, next) => {

    res.status(200).send('Welcome to the home page!');
    res.end();
});







const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
})


