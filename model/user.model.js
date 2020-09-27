const {ObjectId} = require('mongodb');
const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
const programs = require('./program.model');
const {Schema} = mongoose;
const ProgressSchema = require('./progress.model');
//SCHEMA OF THE USER COLLECTION
const userSchema = new Schema({
    progress: [{type: ObjectId, ref: ProgressSchema}], 
    name: String,
    mail: String,
    password: String,
    universityCode: Number,
    programs: [{type: ObjectId, ref: programs}],
    tickets: String
});

userSchema.methods.encryptPassword = (password) =>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('users', userSchema);

