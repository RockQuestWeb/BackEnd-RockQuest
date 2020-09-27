const mongoose = require('mongoose');
const mongoose = require('mongoose');
const { ObjectId } = require('mongoose');
const {Schema} = mongoose;

//SCHEMA OF THE OBJECT COLLECTION
const objectSchema = new Schema({
    name: String,
    image: String,
    mission: String //corregir
});

module.exports = mongoose.model('objects', objectSchema);