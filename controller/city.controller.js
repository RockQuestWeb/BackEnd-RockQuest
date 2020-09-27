require('../database/db.connection');
const CitySchema = require('../model/city.model');

const cityController = {};

//RETURN ALL CITY
cityController.getAll = async function(req, res) {
    try{
        const data = await CitySchema.find();
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}

//RETURN A CITY ACCORDING TO YOUR ID
cityController.getOneById = async function(req,res) {
    try{
        const cityId = req.params.cityId;
        const data = await CitySchema.findOne({"_id": cityId});
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}

//CREATE AND SAVE A NEW CITY
cityController.post = async function(req,res) {
    if(req.body){
        console.log(req.body);
        const newCity = new CitySchema(req.body);
        newCity.save((err,response)=>{
            if(err){
                response.status(500).send({
                    message: 'SOME ERROR OCURRED WHEN INSERT A NEW CITY'
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

module.exports = cityController;
