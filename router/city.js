var express = require('express');
var router = express.Router();
const CityController = require('../controller/city.controller');

router.get('/', CityController.getAll);
router.get('/:cityId',CityController.getOneById);
router.post('/', CityController.post);

module.exports = router;