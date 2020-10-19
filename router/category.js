var express = require('express');
var router = express.Router();
const CategoryController = require('../controller/category.controller');

router.get('/', CategoryController.getAll);
router.get('/:categoryId',CategoryController.getOneById);
router.post('/', CategoryController.post);

module.exports = router;