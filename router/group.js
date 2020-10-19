var express = require('express');
var router = express.Router();
const GroupController = require('../controller/group.controller');

router.get('/', GroupController.getAll);
router.get('/:groupId',GroupController.getOneById);
router.post('/', GroupController.post);

module.exports = router;