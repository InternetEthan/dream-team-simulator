const { Schema, model } = require('mongoose');

const playerSchema = new Schema({
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
    hitCheck:{
        type: Number,
        required: true,
    },
    doubleCheck:{
        type: Number,
        required: true,
    },
    tripleCheck:{
        type: Number,
        required: true,
    },
    homeRunCheck:{
        type: Number,
        required: true,
    },
    }
);

const Players = model('Players', playerSchema);

module.exports = Players;