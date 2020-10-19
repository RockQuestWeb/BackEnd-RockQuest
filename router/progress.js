var express = require('express');
var router = express.Router();
const ProgressController = require('../controller/progress.controller');

router.get('/', ProgressController.getAll);
router.get('/:progressId', ProgressController.getOneById);
router.post('/', ProgressController.post);

module.exports = router;