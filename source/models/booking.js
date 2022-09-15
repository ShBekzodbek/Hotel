const { Schema, model } = require('mongoose');

const booking = new Schema({


    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,

    },
    surname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,

    },
    passportCheck: {
        unique: true,
        required: true,
        passportSerializer: {
            type: String,
            required: true,
            uppercase: true,
            minlength: 2,
            maxlength: 2,
        },
        passportIdNumber: {
            type: Number,
            minlength: 5,
            maxlength: 5,
            unique: true,
            required: true,
        },
    
    },


});
