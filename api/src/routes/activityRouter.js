const {Activity} = require ("../db")
const {Router} = require("express")
const {
    createActivityHandler,
    getActivityHandler,
    updateActivityHandler,
    deleteActivityHandler
} = require ("../handlers/activityHandlers")


const activityRouter = Router()

activityRouter.post("/",createActivityHandler)

//EXTRA

activityRouter.get("/",getActivityHandler)

activityRouter.put("/:id", updateActivityHandler)

activityRouter.delete("/:id", deleteActivityHandler)




module.exports = activityRouter

