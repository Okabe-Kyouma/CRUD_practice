const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    product:[{
       type:mongoose.Schema.Types.ObjectId,
       ref:'Prod',
    }]
})

const User = mongoose.model('User',UserSchema);

module.exports = User;