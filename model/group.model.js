const mongoose = require('mongoose');
const {ObjectId} = require('mongoose');
const {Schema} = mongoose;

const User = require('./user.model');
const Program = require('./program.model');

//SCHEMA OF THE USER COLLECTION
const groupSchema = new Schema({
    title: String,
    users: [{type: ObjectId, ref: User}],
    programs: [{type: ObjectId, ref: Program}]
});

module.exports = mongoose.model('groups', groupSchema);