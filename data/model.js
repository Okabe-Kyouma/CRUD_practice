const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
    },
    prodName:{
        type:String,
        required:true,
    },
    prodDes:{
        type:String,
        required:true,
    },
    prodPrice:{
        type:String,
        required:true,
    }
});

const User = mongoose.model('User',userSchema);

module.exports = User;