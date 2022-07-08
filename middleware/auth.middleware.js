
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv/config")
const SECRET_KEY=process.env.JWT_SECRET

console.log("\n\n\n--------------------------------\n\nSECRET_KEY", SECRET_KEY)

const authMiddleware = (req,res,next) =>{
    try{

        let token = req.headers["n_access_token"]
        console.log(req.headers)
        if(token){
            console.log(token)
            // here we verify token and user          
           console.log(token)
            let user = jwt.verify(token,SECRET_KEY);
            console.log(user)
            req.userId = user.id; //*

        }else{
            res.status(401).json({msg:"Unautherised user!"})

        }
        next()
    }catch(error){
        console.log(error)
        res.status(401).json({msg:"Unautherised user!"})
    }
}

module.exports = authMiddleware;