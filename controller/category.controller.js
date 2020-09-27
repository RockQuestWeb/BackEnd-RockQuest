require('../database/db.connection');
const CategorySchema = require('../model/category.model');

const categoryController = {};

//RETURN ALL CATEGORIES
categoryController.getAll = async function(req, res) {
    try{
        const data = await CategorySchema.find();
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}

//RETURN A CATEGORY ACCORDING TO YOUR ID
categoryController.getOneById = async function(req,res) {
    try{
        const categoryId = req.params.categoryId;
        const data = await CategorySchema.findOne({"_id": categoryId});
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send({
            message: 'SOME ERROR OCURRED'
        });
    }
}

//CREATE AND SAVE A NEW CATEGORY
categoryController.post = async function(req,res) {
    if(req.body){
        console.log(req.body);
        const newCategory = new CategorySchema(req.body);
        newCategory.save((err,response)=>{
            if(err){
                response.status(500).send({
                    message: 'SOME ERROR OCURRED WHEN INSERT A NEW CATEGORY'
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

module.exports = categoryController;
