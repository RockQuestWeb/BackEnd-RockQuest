var express = require('express');
const userController = require('../controller/user.controller');
var router = express.Router();
const UserController = require('../controller/user.controller');

router.get('/', UserController.getAll);
router.get('/:userId', UserController.getOneById);
router.post('/', UserController.post);
router.get('mail/:mail', userController.getOneByMail);

module.exports = router;