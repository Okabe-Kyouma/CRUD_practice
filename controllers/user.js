const User = require('../models/user');

async function getAllUser(req,res){

    const users = await User.find();

    return res.status(200).json(users);

}

async function getUser(req,res){

    const {id} = req.query;

    const user = await User.findById(id);

    res.status(200).json(user);

}

async function addUser(req,res){

    console.log(req.body);

    const {username,password} = req.body;

    const newUser = new User({
        username,
        password
    })

    await newUser.save();
    
    return res.status(201).json(newUser);

}

async function deleteUser(req,res){

     const {id} = req.query;

     try{
     await User.findByIdAndDelete(id);
     res.status(500).json('Server Error');
     }
     catch(e){
        res.status(200).json('User Gone');
     }

}

async function updateUser(req,res){

      const {id} = req.query;
      const {username,password} = req.body;

      const user = await User.findByIdAndUpdate(id,{username,password},{new:true});

    res.status(200).send(user);

}

module.exports = {getAllUser,addUser,getUser,deleteUser,updateUser};