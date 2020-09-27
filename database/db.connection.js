const mongoose = require('mongoose')
//const dbconfig = require('./db.config');
const uri = "mongodb+srv://administrador:RockQuest123@cluster0.lx7aj.gcp.mongodb.net/DBRockQuest?retryWrites=true&w=majority";
const db = mongoose.connection;

//CONFIRMATION OF THE CONNECTION WITH THE DATABASE
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('WE ARE CONNECTED');
});

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


