const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const cities = require('./city.model');
const { Schema } = mongoose;

//SCHEME OF THE QUEST COLLECTION
const questSchema = new Schema ({
    creator: String,
    title: String,
    cities: [{type: ObjectId, ref: cities}]
});

module.exports = mongoose.model('quests', questSchema);