const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        auto: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    }
});

const Users = model('Users', userSchema);

module.exports = Users;