const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true,

    },
    surname: {
        type: String,
        minlength: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        minlength: 5,
        maxlength: 60,
    },
    image: String,
    createdTime: Date,
    updatedTime: Date,
})





userSchema.methods.toJSON = function(){
    let obj = this.toObject();
    delete obj.__v;
    delete obj.id;
    return obj;
}


module.exports = model('Users', userSchema);
