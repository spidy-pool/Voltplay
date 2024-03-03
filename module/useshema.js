import mongoose from "mongoose";


const userschema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        trim:true
    },
    username:{
        unique:true,
        type:String,
        required:true,
        trim:true,
        index:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        min:8
    },
    email:{
        unique:true,
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        trim:true,
        min:10,
        max:10
    }
});


const user = mongoose.model('user',userschema);

export default user ;