require('../database/db.connection');
const { response } = require('express');
const ObjectSchema = require('../model/object.model'); 

const objectController = {};

//RETURN ALL OBJECTS
objectController.getAll = async function(req, res) {
    try {
        const data = await ObjectSchema.find();
        res.status(200).send(data); 
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}

//RETURN A OBJECTS ACORDING TO YOUR ID
objectController.getOneById = async function(req, res) {
    try {
        const objectId = req.params.objectId; 
        const data = await ObjectSchema.findOne({"_id": objectId});
        res.status(200).send(data); 
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}

//CREATE AND SAVE A NEW OBJECTS
objectController.post = async function(req, res) {
    if(req.body){
        console.log(req.body);
        const newObject = new ObjectSchema(req.body);
        newObject.save((err, response) => {
            if(err){
                response.status(500).send({
                    message: 'SOME ERROR OCURRED WHEN INSERT A NEW CATEGORY'
                });
            }
        });
    } else {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}
module.exports = objectController;