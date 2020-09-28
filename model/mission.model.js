const mongoose = require('mongoose');
const { ObjectId } = require('mongoose');
const categorySchema = require('./category.model');
const { Schema } = mongoose;
const NPC = require('./npc.model');
const Object = require('./object.model');

//SCHEME OF THE MISSION COLLECTION
const missionSchema = new Schema ({
    creator: String,
    title: String,
    NPC: {type: ObjectId, ref: NPC},
    mechanical: String,
    object: {type: ObjectId, ref: Object},
    reward: String,
    category: {type: ObjectId, ref: categorySchema}
});

module.exports = mongoose.model('missions', missionSchema);