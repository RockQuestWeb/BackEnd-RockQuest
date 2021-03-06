const mongoose = require('mongoose');
const { ObjectId } = require('mongoose');
const {Schema} = mongoose;
const Mission = require('./mission.model');

//SCHEMA OF THE USER COLLECTION
const npcSchema = new Schema({
    name: String,
    dialogue: [String],
    image: String
});

module.exports = mongoose.model('npcs', npcSchema);