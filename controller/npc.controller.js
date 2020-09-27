require('../database/db.connection');
const { response } = require('express');
const npcSchema = require('../model/npc.model'); 

const npcController = {};

//RETURN ALL NPCS
npcController.getAll = async function(req, res) {
    try {
        const data = await npcSchema.find();
        res.status(200).send(data); 
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}

//RETURN A NPCS ACORDING TO YOUR ID
npcController.getOneById = async function(req, res) {
    try {
        const npcId = req.params.npcId; 
        const data = await npcSchema.findOne({"_id": npcId});
        res.status(200).send(data); 
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}

//CREATE AND SAVE A NEW ACHIEVEMENT
achievementController.post = async function(req, res) {
    if(req.body){
        console.log(req.body);
        const newNpc = new npcSchema(req.body);
        newAchievement.save((err, response) => {
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