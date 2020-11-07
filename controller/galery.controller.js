require('../database/db.connection');
const GalerySchema = require("../model/image.model");

const galeryController = {};

//RETURN ALL CITY
galeryController.getAll = async function(req, res) {
    try{
        const data = await GalerySchema.find();
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}

//RETURN A CITY ACCORDING TO YOUR ID
galeryController.getOneById = async function(req,res) {
    try{
        const imageId = req.params.imageId;
        const data = await GalerySchema.findOne({"_id": imageId});
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}

//CREATE AND SAVE A NEW CITY
galeryController.post = async function(req,res) {
    if(req.body){
        console.log(req.body);

        const newImage = new GalerySchema(req.body);
        newImage.title = req.body.title;
        newImage.image = req.body.image;
        newImage.section = req.body.section;

        newImage.save((err,response)=>{
            if(err){
                response.status(500).send({
                    message: 'SOME ERROR OCURRED WHEN INSERT A NEW IMAGE'
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

module.exports = galeryController;
