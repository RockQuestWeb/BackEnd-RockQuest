require('../database/db.connection');
const ProgressSchema = require('../model/progress.model');

const progressController = {};

//RETURN ALL PROGRESS
progressController.getAll = async function(req, res) {
    try{
        const data = await ProgressSchema.find();
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}

//RETURN A PROGRESS ACCORDING TO YOUR ID
progressController.getOneById = async function(req,res) {
    try{
        const progressId = req.params.progressId;
        const data = await ProgressSchema.findOne({"_id": progressId});
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}

//CREATE AND SAVE A NEW PROGRESS
progressController.post = async function(req,res) {
    if(req.body){
        console.log(req.body);
        const newProgress = new ProgressSchema(req.body);
        newProgress.save((err,response)=>{
            if(err){
                response.status(500).send({
                    message: 'SOME ERROR OCURRED WHEN INSERT A NEW PROGRESS'
                });
            }
        });
    }else {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}

module.exports = progressController;
