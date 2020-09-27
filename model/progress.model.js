const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const categorySchema = require('./category.model');
const { Schema } = mongoose;

//SCHEME OF THE PROGRESS COLLECTION
const progressSchema = new Schema ({
    categories: [{type: ObjectId, ref: categorySchema}],
    achievements: String //CAMBIO
});

module.exports = mongoose.model('progress', progressSchema);