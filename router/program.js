var express = require('express');
var router = express.Router();
const ProgramController = require('../controller/program.controller');

router.get('/', ProgramController.getAll);
router.get('/:programId',ProgramController.getOneById);
router.post('/', ProgramController.post);

module.exports = router;