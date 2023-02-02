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

activityRouter.get("/:id",getActivityByIdHandler)

activityRouter.put("/:id", updateActivityHandler)

activityRouter.delete("/:id", deleteActivityHandler)




module.exports = activityRouter

