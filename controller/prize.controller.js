require('../database/db.connection');
const { response } = require('express');
const PrizeSchema = require('../model/prize.model');

const prizeController = {};

//RETURN ALL PRIZES
prizeController.getAll = async function(req, res) {
    try {
        const data = await PrizeSchema.find();
        res.status(200).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}


//RETURN A PRIZE ACCORDING TO YOUR ID
prizeController.getOneById = async function(req, res) {
    try {
        const prizeId = req.params.prizeId;
        const data = await PrizeSchema.findOne({"_id": groupId});
        res.status(200).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}

//CREATE AND SAVE A NEW PRIZE
prizeController.post = async function(req, res) {
    if(req.body){
        console.log(req.body);
        const newGroup = new PrizeSchema(req.body);
        newGroup.save((err, response) => {
            if(err){
                response.status(500).send({
                    message: 'SOME ERROR OCURRED WHEN INSERT A NEW PRIZE'
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
module.exports = prizeController;