var express = require('express');
var router = express.Router();
const QuestController = require('../controller/quest.controller');

router.get('/', QuestController.getAll);
router.get('/:questId',QuestController.getOneById);
router.post('/', QuestController.post);

module.exports = router;