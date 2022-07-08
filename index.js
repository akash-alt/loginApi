const express = require('express');
const app = express();
const notesRouter = require('./routers/notes.routes');
const userRouter = require('./routers/auth.routes');
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require('./routers/auth.routes');

const uri = process.env.CHEEZY_DB
const PORT = process.env.PORT||3030

//* converting data in to json
app.use(express.json());
app.use(cors());

//* middleware 
app.use((req,res,next) => {
    console.log("HTTP method - " + req.method + ", URL - " + req.url)
    next()
})


//* router
// app.use("/api/note",notesRouter)
app.use("/auth",authRouter)
app.use("/note",notesRouter)


app.get("/", (req,res) =>{
    res.send("Hii.. i am backend! this is checking response !")
})


app.listen(PORT,() =>{
    //* connecting database
    mongoose.connect(process.env.CHEEZY_DB,
        {
            useNewUrlParser: true,
            //dbName:"demo",  // here we have to define database name which is in atlas
            // useCreateIndex: true,
            useUnifiedTopology: true
                }, () => console.log("connection has established with mongoDB!")
    )
    console.log("server is running on:", `${PORT}`)
})