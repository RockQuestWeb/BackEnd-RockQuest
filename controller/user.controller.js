require('../database/db.connection');
const { response } = require('express');
const UserSchema = require('../model/user.model');

const userController = {};

//RETURN A MENSSAGE
userController.hello = async function(req,res){
    res.send('HOLA! bienvenido a ROCK QUEST BackEnd rutas: /achievement -/category -/city -/group -/mission -/npc -/object -/prize -/program -/progress -/quest -/user');
}

//RETURN ALL USER
userController.getAll = async function(req, res) {
    try {
        const data = await UserSchema.find();
        res.status(200).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}

//RETURN A USER ACORDING TO YOUR ID
userController.getOneById = async function(req, res) {
    try {
        const userId = req.params.categoryId;
        const data = await UserSchema.findOne({"_id": userId});
        res.status(200).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}

//CREATE AND SAVE A NEW USER USER
userController.post = async function(req, res) {
    if(req.body){
        console.log(req.body);
        const newUser = new UserSchema(req.body);
        newUser.save((err, response) =>{
            if(err){
                response.status(500).send({
                    message: 'SOME ERROR OCURRED WHEN INSERT A NEW USER'
                });
            }else {
                res.send(response);
            }
        });
    } else {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}
module.exports = userController;