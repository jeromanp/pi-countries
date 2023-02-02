const {Router} = require("express")
//const {Country} = require ("../db")

const  {
    getAllFromsHandler,
    getFromByIdHandler,
    //filterFroms,
} = require("../handlers/countriesHandlers")

const countriesRouter = Router()


countriesRouter.get("/",getAllFromsHandler)


countriesRouter.get("/:idPais",getFromByIdHandler)

// countriesRouter.get("/name=",(req, res)=>{
//     res.send("debera llamar a la funcion filterFroms")
// })


//EXTRA




module.exports = countriesRouter

