const mongoose = require('mongoose');
const {ObjectId} = require('mongodb');
const User = require('./user.model');
const Prize = require("./prize.model");
const { Schema } = mongoose;

//SCHEMA OF THE PROGRAM COLLECTION
const programSchema = new Schema({
    title: String,
    teacher: [{type: ObjectId, ref: User}],
    prize: [{type: ObjectId, ref: Prize}]
});

module.exports = mongoose.model('programs', programSchema);