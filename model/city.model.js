const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const MissionSchema = require('./mission.model');
const { Schema } = mongoose;

//SCHEME OF THE CITY COLLECTION
const citySchema = new Schema ({
    creator: String,
    title: String,
    map: [[String]],
    missions: {type: ObjectId, ref: MissionSchema}
});

module.exports = mongoose.model('cities', citySchema);