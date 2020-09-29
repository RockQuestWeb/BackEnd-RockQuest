const mongoose = require('mongoose');
const {Schema} = mongoose;

//SCHEMA OF THE PRIZE COLLECTION
const prizeSchema = new Schema({
    rewards: String,
    tickets: Number
});

module.exports = mongoose.model('prizes', prizeSchema);