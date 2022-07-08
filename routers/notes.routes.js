
const { getNote, createNote, deleteNote, updateNote } = require('../controllers/note.controller');
const notesRouter = require('express').Router();
const authMiddleware = require("../middleware/auth.middleware");

{/**notesRouter.get("/", (req,res) =>{
    res.send("this is get method")
})

notesRouter.post("/", (req,res) =>{
    res.send("this is post method")
}) **/}

notesRouter.get("/",authMiddleware,getNote)

notesRouter.post("/",authMiddleware,createNote)

notesRouter.delete("/:id",authMiddleware, deleteNote)

notesRouter.put("/:id",authMiddleware,updateNote)

module.exports = notesRouter;