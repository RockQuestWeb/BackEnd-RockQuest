var express = require('express');
var router = express.Router();
const GaleryController = require('../controller/galery.controller');

router.get('/', GaleryController.getAll);
router.get('/:imageId',GaleryController.getOneById);
router.post('/', GaleryController.post);

module.exports = router;