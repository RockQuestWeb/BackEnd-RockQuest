var express = require('express');
var router = express.Router();
const MissionController = require('../controller/mission.controller');

router.get('/', MissionController.getAll);
router.get('/:missionId',MissionController.getOneById);
router.post('/', MissionController.post);

module.exports = router;