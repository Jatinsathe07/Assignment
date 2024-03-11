const mongoose =require ('mongoose');

const studentsSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true

    },

    mobile:{
        type:Number,
        required:true
    },

    fees:{
        type:Boolean,
        required:true
    },

    date:{
        type:Date,
        default:Date.now
    }
})

const Student = new mongoose.model("Student",studentsSchema);
