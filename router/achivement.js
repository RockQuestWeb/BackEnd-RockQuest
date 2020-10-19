var express = require('express');
var router = express.Router();
const AchievementController = require('../controller/achievement.controller');

router.get('/', AchievementController.getAll);
router.get('/:achievementId',AchievementController.getOneById);
router.post('/', AchievementController.post);

module.exports = router;