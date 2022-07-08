
const mongoose = require('mongoose');
const NoteSchema = new mongoose.Schema({
     title:{
         type:String,
         required:true
     },
    desc:{
        type:String,
        required:true
    },
     userId:{
         type:mongoose.Schema.Types.ObjectId, // defining type for id
         ref:"User",
         required:true
     }
},{timestamps:true})

//* exporting model
module.exports = mongoose.model('Note',NoteSchema)
