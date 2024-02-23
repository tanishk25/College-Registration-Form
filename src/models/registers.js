const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstname : {
        type:String,
        require:true
    },
    age : {
        type:Number,
        require:true
    },
    email : {
        type:String,
        require:true,
        unique :true
    },
    gender : {
        type:String,
        require:true
    },
    phone : {
        type:Number,
        require:true,
        unique:true
    },
    password : {
        type:String,
        require:true
    },
    confirmpassword : {
        type:String,
        require:true
    }
})

const Register = new mongoose.model("Register", studentSchema);

module.exports = Register;