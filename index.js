const express = require('express');
const {connectMongo} = require('./connection');
const userRoutes = require('./routes/user');

connectMongo();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',userRoutes);



const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`Server Started at port: ${PORT}`);
})