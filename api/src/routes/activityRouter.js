const {Activity} = require ("../db")
const {Router} = require("express")
const {
    createActivity,
    getActivity,
    updateActivity,
    deleteActivity
} = require ("../controllers/activityController")


const activityRouter = Router()

activityRouter.post("/",(req, res)=>{
    res.send("llama a la funcion createActivity");
})

//EXTRA

activityRouter.get("/",(req, res)=>{
    res.send("llamara a la funcion getActivity");
})

activityRouter.put("/:id", (req, res)=>{
    res.send("llamara a la funcion updateActivity")
})

activityRouter.delete("/:id", (req, res)=>{
    res.send("ejecutara la funcion deleteActivity")
})




module.exports = activityRouter

