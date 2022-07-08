const authController = require("../controllers/uath.controller");

const authRouter = require("express").Router();

{/*userRouter.post("/signup",(req,res) =>{
    res.send("signup")
})

userRouter.post("/signin",(req,res) =>{
    res.send("signin")
})*/}

authRouter.post("/signup",authController.signup)

authRouter.post("/signin",authController.signin)

module.exports = authRouter;