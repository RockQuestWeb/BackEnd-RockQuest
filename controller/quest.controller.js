require('../database/db.connection');
const QuestSchema = require('../model/quest.model');

const questController = {};

//RETURN ALL QUEST
questController.getAll = async function(req, res) {
    try{
        const data = await QuestSchema.find();
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}

//RETURN A QUEST ACCORDING TO YOUR ID
questController.getOneById = async function(req,res) {
    try{
        const questId = req.params.questId;
        const data = await QuestSchema.findOne({"_id": questId});
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}

//CREATE AND SAVE A NEW QUEST
questController.post = async function(req,res) {
    if(req.body){
        console.log(req.body);
        const newProgress = new QuestSchema(req.body);
        newProgress.save((err,response)=>{
            if(err){
                res.send({
                    message: 'SOME ERROR OCURRED WHEN INSERT A NEW QUEST'
                });
            }else {
                res.send(response);
            }
        });
    }else {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}

module.exports = questController;