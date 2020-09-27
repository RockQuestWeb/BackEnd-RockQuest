const mongoose = require('mongoose');
const { ObjectId } = require('mongoose');
const {Schema} = mongoose;
const Mission = require('./mission.model');

//SCHEMA OF THE OBJECT COLLECTION
const objectSchema = new Schema({
    name: String,
    image: String,
    mission: {Type: ObjectId, ref: Mission}
});

module.exports = mongoose.model('objects', objectSchema);