var express = require('express');
var router = express.Router();
const PrizeController = require('../controller/prize.controller');

router.get('/', PrizeController.getAll);
router.get('/:prizeId',PrizeController.getOneById);
router.post('/', PrizeController.post);

module.exports = router;