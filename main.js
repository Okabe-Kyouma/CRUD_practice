const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/khikhikhikhikhi');

const db = mongoose.connection;



db.on('error',(err)=>console.log(err));
db.on('open',()=>console.log('mongodb connected'));

app.set('view engine','ejs');
app.use(express.static("public"));


app.get('/',(req,res)=>{
    res.redirect('/home');
})

app.get('/home',(req,res)=>{

    res.render('home')

})

app.get('/add',(req,res)=>{

    res.render('add');

})

app.listen(3000,()=>{
    console.log('server started at 3000');
})