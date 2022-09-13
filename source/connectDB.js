const mongoose = require('mongoose');

const mongo_url = process.env.MONGODB_URL
const connectDB = mongoose.connect(mongo_url)
    .then(() => {
        if (process.env.NODE_ENV !== 'production') {
            console.log('Connecting to Mongoose database..');
        }
    }).catch((err) => {
        err.statusCode = err.statusCode || 500;
        console.log(err.message);
        
    })



module.exports = connectDB;
