const mongoose = require('mongoose');

const prodSchema = new mongoose.Schema({
   
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

})

const Prod = mongoose.model('Prod',prodSchema);

module.exports = Prod;