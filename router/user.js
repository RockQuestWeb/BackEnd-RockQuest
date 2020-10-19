var express = require('express');
var router = express.Router();
const UserController = require('../controller/user.controller');

router.get('/', UserController.getAll);
router.get('/:userId', UserController.getOneById);
router.post('/', UserController.post);

module.exports = router;