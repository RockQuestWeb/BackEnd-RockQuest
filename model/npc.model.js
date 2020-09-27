const mongoose = require('mongoose');
const {ObjectId} = require('mongoose');
const {Schema} = mongoose;
const Mission = require('./mission.model');

//SCHEMA OF THE USER COLLECTION
const npcSchema = new Schema({
    name: String,
    dialogue: [String],
    imagen: String,
    mission: {type: ObjectId, ref: Mission}
});

module.exports = mongoose.model('npcs', npcSchema);