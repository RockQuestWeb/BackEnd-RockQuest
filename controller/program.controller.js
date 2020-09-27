require('../database/db.connection');
const programSchema = require('../model/program.model');

const programController = {};

//RETURN ALL PROGRAMS
programController.getAll = async function(req, res) {
    try{
        const data = await programSchema.find();
        res.status(200).send(data);
    } catch(err) {
    res.status(500).send({
        message: 'SOME ERROR OCURRED'
       });
    }
}

//RETURN A PROGRAM ACORDING TO YOUR ID
programController.getOneById = async function(req, res) {
    try{
        const programId = req.params.programId;
        const data = await programSchema.findOne({"_id": programId});
        res.status(200).send(data);
    } catch(err){
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}


//CREATE AND SAVE A NEW PROGRAM
programController.post = async function (req, res){
    if(req.body){
        console.log(req.body);
        const newProgram = new programSchema(req.body);
        newProgram.save((err, response) =>{
            if(err){
                response.status(500).send({
                    message: 'SOME ERROR OCURRED WHEN INSERT A NEW PROGRAM'
                });
            }
        });
    } else{
        console.log(err);
        res.status(500).send({
            message: 'SOME OCURRED'
        });
    }
}
module.exports = programController;