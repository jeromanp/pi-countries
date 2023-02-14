const {Activity} = require ("../db")
const {Router} = require("express")
const {
    createActivityHandler,
    getActivityHandler,
    getActivityByIdHandler,
    updateActivityHandler,
    deleteActivityHandler
} = require ("../handlers/activityHandlers")


const activityRouter = Router()

activityRouter.post("/",createActivityHandler)

//EXTRA

activityRouter.get("/", getActivityHandler)






module.exports = activityRouter

