const mongoose = require('mongoose');
const {ObjectId} = require('mongoose');
const {Schema} = mongoose;

//SCHEMA OF THE ACHIEVEMENT COLLECTION
const achievementSchema = new Schema({
    title: String,
    creator: String,
    description: String,
    image: String
});

module.exports = mongoose.model('achievements', achievementSchema);
