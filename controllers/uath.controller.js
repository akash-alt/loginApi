
const userModel = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv/config")
const SECRET_KEY=process.env.JWT_SECRET



const authController = {

     signup : async(req,res) =>{
    
    //* notes should follow for functionality
    {/*
    a) Existing user
    b) Hashed Password
    c) User creation
    d) Token Generate 
    */}
    
    //* signup
    const {email,password} = req.body
    try{
        const existingUser = await userModel.findOne({email:email})
        if(existingUser){
           
            return res.status(400).json({msg:'this user already exist!'})
        }
    
        const hashedPassword = await bcrypt.hash(password,10);
    
        const result = await userModel.create({
            email:email,
            password:hashedPassword,
            // username:username
        })
        const token = jwt.sign({email: result.email,id:result._id},SECRET_KEY)
        res.status(201).json({user:result,token:token})
    }catch(error){
        console.log(error)
        res.status(500).json({msg:"something went wrong!"})
    }
    },
    
    //* signin
     signin : async(req,res) =>{
        const {email,password} = req.body
        try{
            const existingUser = await userModel.findOne({email:email})
            if(!existingUser){
               return res.status(404).json({msg:'user not found!'})
            }
    
            const matchPassword = await bcrypt.compare(password,existingUser.password)
            if(!matchPassword){
                return res.status(400).json({msg:"Invalid credential!"})
            } 
    
            const token  = jwt.sign({email:existingUser.email,id:existingUser._id},SECRET_KEY)
            res.status(201).json({user:existingUser,token:token})
    
        }catch(error){
            console.log(error)
            res.status(500).json("something went wrong!")
    
        }
    
    }
}

module.exports = authController


