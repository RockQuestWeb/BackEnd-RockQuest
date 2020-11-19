const {ObjectId} = require('mongodb');
const mongoose = require('mongoose');
const programs = require('./program.model');
const {Schema} = mongoose;
const ProgressSchema = require('./progress.model');

//SCHEMA OF THE USER COLLECTION
const userSchema = new Schema({
    name: String,
    mail: String,
    password: String,
    universityCode: Number,
    tickets: Number,
    rank: String,
    progress: {type: ObjectId, ref: ProgressSchema},
    programs: [{type: ObjectId, ref: programs}]
    
});

userSchema.methods.encryptPassword = (password) =>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('users', userSchema);

