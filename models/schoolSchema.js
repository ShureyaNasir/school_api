const mongoose = require("mongoose")

const schoolSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    level:{
        type:String,
        required:true
    },
    category: {
        type:string,
        required:true
    },
    numOfStudents:{
        type:Number,
        required:true
    },
    location:{
        type:string,
        required:true
    },
    address:{
        gps:string,
        box:string
    },
    contact:{

    }
 
})