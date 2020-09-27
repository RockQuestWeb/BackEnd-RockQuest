require('../database/db.connection');
const AchievementSchema = require('../model/achievement.model'); 

const achievementController = {};

//RETURN ALL ACHIEVEMENTS
achievementController.getAll = async function(req, res) {
    try {
        const data = await AchievementSchema.find();
        res.status(200).send(data); 
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}

//RETURN A ACHIEVEMENTS ACORDING TO YOUR ID
achievementController.getOneById = async function(req, res) {
    try {
        const achievementId = req.params.achievementId; 
        const data = await AchievementSchema.findOne({"_id": achievementId});
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
        const newAchievement = new AchievementSchema(req.body);
        newAchievement.save((err, response) => {
            if(err){
                response.status(500).send({
                    message: 'SOME ERROR OCURRED WHEN INSERT A NEW CATEGORY'
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

module.exports = achievementController;