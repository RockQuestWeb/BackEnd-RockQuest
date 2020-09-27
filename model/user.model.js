const { ObjectID, Long } = require('mongodb');
const mongose = require('mongoose');
const {ObjectID} = require('mongoose');
const Program = require('./user/program');
const {Schema} = mongoose;

//SCHEMA OF THE USER COLLECTION
const userSchema = new Schema({
    proceso: String, //cambiar
    name: String,
    mail: String,
    password: String,
    universityCode: Long,
    program: String, //cambiar
    tickets: String
});

userSchema.methods.encryptPassword = (password) =>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('users', userSchema);

