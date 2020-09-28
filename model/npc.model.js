const mongoose = require('mongoose');
const { ObjectId } = require('mongoose');
const Mission = require('./mission.model');
const {Schema} = mongoose;

//SCHEMA OF THE USER COLLECTION
const npcSchema = new Schema({
    name: String,
    dialogue: [String],
    image: String
});

module.exports = mongoose.model('npcs', npcSchema);