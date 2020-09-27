const router = require('express').Router();

//CONTROLLER LIST
const CategoryController = require('./controller/category.controller');
const CityController = require('./controller/city.controller');
const MissionController = require('./controller/mission.controller');
const ProgressController = require('./controller/progress.model');
const QuestController = require('./controller/quest.controller');

//CATEGORY
router.get('/category', CategoryController.getAll);
router.get('/category/:categoryId',CategoryController.getOneById);
router.post('/category', CategoryController.post);

//CITY
router.get('/city', CityController.getAll);
router.get('/city/:cityId',CityController.getOneById);
router.post('/city', CityController.post);

//MISSION
router.get('/mission', MissionController.getAll);
router.get('/mission/:missionId',MissionController.getOneById);
router.post('/mission', MissionController.post);

//PROGRESS
router.get('/progress', ProgressController.getAll);
router.get('/progress/:progressId',ProgressController.getOneById);
router.post('/progress', ProgressController.post);

//QUEST
router.get('/quest', QuestController.getAll);
router.get('/quest/:questId',QuestController.getOneById);
router.post('/quest', QuestController.post);

module.exports = router;