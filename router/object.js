var express = require('express');
var router = express.Router();
const ObjectController = require('../controller/object.controller');

router.get('/', ObjectController.getAll);
router.get('/:objectId', ObjectController.getOneById);
router.post('/', ObjectController.post);

module.exports = router;