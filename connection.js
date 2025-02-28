const mongoose = require('mongoose');

function connectMongo(){

    mongoose.connect('mongodb://localhost:27017/yt');

const db = mongoose.connection;

db.on('error',(err)=>{console.log(err)});
db.on('open',()=>{console.log('mongodb connected')});

}

module.exports = {connectMongo};


