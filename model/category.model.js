const mongoose = require('mongoose');
const { Schema } = mongoose;

//SCHEME OF THE CATEGORY COLLECTION
const categorySchema = new Schema ({
    title: String,
    description: String,
    value: Number
});

module.exports = mongoose.model('categories', categorySchema);