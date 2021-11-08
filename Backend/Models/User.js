const mongoose=require("mongoose");


const reqstring={
    type:String,
    required:true,
}
const reqnumber={
    type:Number,
    required:true,
}
const str={
    type:String,
}


const details=new mongoose.Schema({
    username:reqstring,
     emailId:{
        type:String,
    required:true,
    unique:true,
     },
    password:reqnumber,

});
const User=mongoose.model("details",details)
module.exports=User