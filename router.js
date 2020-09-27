const router = require('express').Router();

//CONTROLLER LIST
const CategoryController = require('./controller/category.controller');
const CityController = require('./controller/city.controller');
const MissionController = require('./controller/mission.controller');
const ProgressController = require('./controller/progress.controller');
const QuestController = require('./controller/quest.controller');
const AchievementController = require('./controller/achievement.controller');
const GroupController = require('./controller/group.controller');
const NpcController = require('./controller/npc.controller');
const ObjectController = require('./controller/object.controller');
const PrizeController = require('./controller/prize.controller');
const ProgramController = require('./controller/program.controller');
const UserController = require('./controller/user.controller');

//ACHIEVEMENT
router.get('/achievement', AchievementController.getAll);
router.get('/category/:achievementId',AchievementController.getOneById);
router.post('/achievement', AchievementController.post);

//CATEGORY
router.get('/category', CategoryController.getAll);
router.get('/category/:categoryId',CategoryController.getOneById);
router.post('/category', CategoryController.post);

//CITY
router.get('/city', CityController.getAll);
router.get('/city/:cityId',CityController.getOneById);
router.post('/city', CityController.post);

//GROUP
router.get('/group', GroupController.getAll);
router.get('/group/:groupId',GroupController.getOneById);
router.post('/group', GroupController.post);

//MISSION
router.get('/mission', MissionController.getAll);
router.get('/mission/:missionId',MissionController.getOneById);
router.post('/mission', MissionController.post);

//NPC
router.get('/npc', NpcController.getAll);
router.get('/npc/:npcId', NpcController.getOneById);
router.post('/npc', NpcController.post);

//OBJECT
router.get('/object', ObjectController.getAll);
router.get('/object/:objectId', ObjectController.getOneById);
router.post('/object', ObjectController.post);

//PRIZE
router.get('/prize', PrizeController.getAll);
router.get('/prize/:prizeId',PrizeController.getOneById);
router.post('/prize', PrizeController.post);

//PROGRAM
router.get('/program', ProgramController.getAll);
router.get('/program/:programId',ProgramController.getOneById);
router.post('/program', ProgramController.post);

//PROGRESS
router.get('/progress', ProgressController.getAll);
router.get('/progress/:progressId', ProgressController.getOneById);
router.post('/progress', ProgressController.post);

//QUEST
router.get('/quest', QuestController.getAll);
router.get('/quest/:questId',QuestController.getOneById);
router.post('/quest', QuestController.post);

//USER
router.get('/user', UserController.getAll);
router.get('/user/:userId', UserController.getOneById);
router.post('/user', UserController.post);

module.exports = router;