const { Schema, model } = require('mongoose');

const playerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    imageName: {
        type: String,
        required: true,
        unique: true,
    },
    playerType: {
        type: String,
        required: true,
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
    stealBaseCheck:{
        type: Number,
        required: true,
    },
    }
);

const Player = model('Player', playerSchema);

module.exports = Player;