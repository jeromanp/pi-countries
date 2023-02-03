const {Router} = require("express")
//const {Country} = require ("../db")

const  {
    getAllCountriesHandler,
    getCountryByIdHandler,
    //filterFroms,
} = require("../handlers/countriesHandlers")

const countriesRouter = Router()


countriesRouter.get("/",getAllCountriesHandler)


countriesRouter.get("/:id",getCountryByIdHandler)

// countriesRouter.get("/name=",(req, res)=>{
//     res.send("debera llamar a la funcion filterFroms")
// })


//EXTRA




module.exports = countriesRouter

