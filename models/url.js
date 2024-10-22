const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectURL:{
        type:String,
        required:true,
    },
    visiteHistory:[{
        timestamp : {
            type:Number
        }
    }]
},{timestamp:true})


const URl = mongoose.model("url", urlSchema)

module.exports=URl;