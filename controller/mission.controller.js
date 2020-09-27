require('../database/db.connection');
const MissionSchema = require('../model/mission.model');

const missionController = {};

//RETURN ALL MISSION
missionController.getAll = async function(req, res) {
    try{
        const data = await MissionSchema.find();
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}

//RETURN A MISSION ACCORDING TO YOUR ID
missionController.getOneById = async function(req,res) {
    try{
        const missionId = req.params.missionId;
        const data = await MissionSchema.findOne({"_id": missionId});
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}

//CREATE AND SAVE A NEW MISSION
missionController.post = async function(req,res) {
    if(req.body){
        console.log(req.body);
        const newMission = new MissionSchema(req.body);
        newMission.save((err,response)=>{
            if(err){
                response.status(500).send({
                    message: 'SOME ERROR OCURRED WHEN INSERT A NEW MISSION'
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

module.exports = missionController;
