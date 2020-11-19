const mongoose = require('mongoose');
const { ObjectId } = require('mongoose');
const categorySchema = require('./category.model');
const NPCSchema = require('./npc.model');
const ObjectSchema = require('./object.model');
const { Schema } = mongoose;

//SCHEME OF THE MISSION COLLECTION
const missionSchema = new Schema ({
    creator: String,
    title: String,
    mechanical: String,
    reward: String,
    NPC: {type: ObjectId, ref: NPCSchema},
    object: {type: ObjectId, ref: ObjectSchema},
    category: {type: ObjectId, ref: categorySchema}
});

module.exports = mongoose.model('missions', missionSchema);