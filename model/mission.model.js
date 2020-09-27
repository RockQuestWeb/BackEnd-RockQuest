const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const categorySchema = require('./category.model');
const { Schema } = mongoose;

//SCHEME OF THE MISSION COLLECTION
const missionSchema = new Schema ({
    creator: String,
    title: String,
    NPC: String,
    mechanical: String,
    object: String,
    reward: String,
    category: {type: ObjectId, ref: categorySchema}
});

module.exports = mongoose.model('missions', missionSchema);