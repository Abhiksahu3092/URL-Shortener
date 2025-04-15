const mongoose = require('mongoose');

const urlschema=new mongoose.Schema({
    urlid:{
        type:String,
        required:true,
        unique:true,
    },
    redirecturl:{
        type:String,
        required:true,
    },
    history:[
        {
            visit_time:{
                type:Number
            }
        }
    ],
},{timestamps:true});

const urlmodel=mongoose.model('urlmodel',urlschema);

module.exports=urlmodel;