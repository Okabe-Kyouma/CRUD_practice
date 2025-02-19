const express = require('express');
const mongoose = require('mongoose');
const product = require('./data/model');

const app = express();

mongoose.connect('mongodb://localhost:27017/khikhikhikhikhi');

const db = mongoose.connection;



db.on('error',(err)=>console.log(err));
db.on('open',()=>console.log('mongodb connected'));

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.redirect('/home');
})

app.get('/home',async (req,res)=>{

    const prods = await product.find();

    res.render('home',{prods});

})

app.post('/add/complete',async (req,res)=>{

    const{prodName,prodDes,prodPrice} = req.body;

    const prods = await product.find();

    const id = prods.length + 1;

    const newUser = new product({
          id,
          prodName,
          prodDes,
          prodPrice
    });

    await newUser.save();

    res.redirect('/home');

})

app.get('/edit/:id',async(req,res)=>{
      
    const {id} = req.params;
     
    const prod = await product.findById(id);

    res.render('edit',{prod});
})

app.post('/edit/complete/:id',async (req,res)=>{

     const {id} = req.params;
     const {prodName,prodDes,prodPrice} = req.body;

     const prod = await product.findById(id);

     prod.prodName = prodName;
     prod.prodDes = prodDes;
     prod.prodPrice = prodPrice;

     prod.save();

     res.redirect('/home');

})

app.get('/show/:id',async (req,res)=>{
    const {id} = req.params;

    const prod = await product.findById(id);

    res.render('show',{prod});

})

app.get('/delete/:id',async (req,res)=>{

    const {id} = req.params;

    await product.findByIdAndDelete(id);

    res.redirect('/home');

})

app.get('/show/:id',(req,res)=>{
    res.render('show');
})

app.get('/add',(req,res)=>{

    res.render('add');

})

app.listen(3000,()=>{
    console.log('server started at 3000');
})