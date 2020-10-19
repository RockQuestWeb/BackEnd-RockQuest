//DECLARATIONS
const cors = require('cors');
const express = require('express');
const Mongoose  = require('mongoose');
const app = express();
const router = require('./router');

var achivementRouter = require('./router/achivement');
var categoryRouter = require('./router/category');
var cityRouter = require('./router/city');
var groupRouter=require('./router/group');
var missionRouter=require('./router/mission');
var npcRouter=require('./router/npc');
var objectRouter=require('./router/object');
var prizeRouter=require('./router/prize');
var programRouter=require('./router/program');
var progressRouter=require('./router/progress');
var questRouter=require('./router/quest');
var userRouter=require('./router/user');

require('./database/db.connection');


//middlewears
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//MAIN ROUTE
app.use('/achivement', achivementRouter);
app.use('/category', categoryRouter);
app.use('/city', cityRouter);
app.use('/group', groupRouter);
app.use('/mission', missionRouter);
app.use('/npc', npcRouter);
app.use('/object', objectRouter);
app.use('/prize', prizeRouter);
app.use('/program', programRouter);
app.use('/progress', progressRouter);
app.use('/quest', questRouter);
app.use('/user', userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("SERVER IS LISTEN ON PORT:" , PORT);
});

Mongoose.connection.on('open',_=>{
    console.log('DATABASE IS CONENECTED');
});

