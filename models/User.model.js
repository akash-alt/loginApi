
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    //  username:{
    //      type:String,
    //      required:true
    //  },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true}) //* here have used time stamp for geting information it creates

//* exporting model
module.exports = mongoose.model('User',UserSchema)
