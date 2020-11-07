const mongoose = require('mongoose');
const { ObjectId } = require('mongoose');
const { Schema } = mongoose;

//SCHEME OF THE MISSION COLLECTION
const GalerySchema = new Schema ({
    title: String,
    image: String,
    section: String
});

module.exports = mongoose.model('galery', GalerySchema);