const {Activity} = require ("../db")
const {Router} = require("express")


const activityRouter = Router()

activityRouter.get("/",(req, res)=>{
    res.send("Estoy en Activities");
})


module.exports = activityRouter

