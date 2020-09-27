require('../database/db.connection');
const GroupSchema = require('../model/group.model');

const groupController = {};

//RETURN ALL GROUPS
groupController.getAll = async function(req, res) {
    try {
        const data = await GroupSchema.find();
        res.status(200).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}

//RETURN A GROUP ACCORDING TO YOUR ID
groupController.getOneById = async function(req, res) {
    try {
        const groupId = req.params.groupId;
        const data = await GroupSchema.findOne({"_id": groupId});
        res.status(200).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}


//CREATE AND SAVE A NEW GROUP
groupController.post = async function(req, res) {
    if(req.body){
        console.log(req.body);
        const newGroup = new GroupSchema(req.body);
        newGroup.save((err, response) => {
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

module.exports = groupController;