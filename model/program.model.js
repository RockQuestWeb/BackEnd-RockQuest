const mongose = require('mongoose');
const {ObjectId} = require('mongoose');
const {Schema} = mongoose;
const User = require('./user.model');
const Prize = require("./prize.model");

//SCHEMA OF THE PROGRAM COLLECTION
const programSchema = new Schema({
    title = String,
    teacher = [{type: ObjectId, ref: User}],
    prize = [{type: ObjectId, ref: Prize}]
});

module.exports = mongose.model('programs', programSchema);