var express = require('express');
var router = express.Router();
const NpcController = require('../controller/npc.controller');

router.get('/', NpcController.getAll);
router.get('/:npcId', NpcController.getOneById);
router.post('/', NpcController.post);

module.exports = router;