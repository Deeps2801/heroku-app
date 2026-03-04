
const mongoose = require("mongoose");
// const validate = require("validator");
const validator  = require("validator");
const studentSchema = new mongoose.Schema({
    name :{
        type: String ,
        required : true
    }    ,
    email : {
        type : String ,
        required : true ,
        unique : [true , "Emaild id alredy exist"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email");
            }
        }
    },
    phone : {
        required : true ,
        type : Number ,
        minlength : 10 ,
        maxlength : 10 ,
        unique:true
    },
    address : {
        type : String ,
        required : true
    }
});


const Student = new mongoose.model("student-data" , studentSchema);
module.exports = Student ; 
