const mongoose = require('mongoose');
const {ObjectId} = require('mongoose');
const {Schema} = mongoose;

//SCHEMA OF THE USER COLLECTION
const npcSchema = new Schema({
    name: String,
    dialogue: String,
    imagen: String,
    mission: String //CORREGIR
});

module.exports = mongoose.model('npcs', npcSchema);