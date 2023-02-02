const {Router} = require("express")
//const {Country} = require ("../db")

const  {
    getAllFroms,
    getFromById,
    filterFroms,
} = require("../controllers/countriesController")

const countriesRouter = Router()


countriesRouter.get("/",(req,res)=>{
    res.send("debera llamar a la funcion getAllFroms");
})

//otra forma de ejecutarla
//countriesRouter.get("/",getAllFroms)

countriesRouter.get("/:idPais",(req,res)=>{
    res.send("debera llamar a la funcion getFromById")
})

countriesRouter.get("/name=",(req, res)=>{
    res.send("debera llamar a la funcion filterFroms")
})


//EXTRA




module.exports = countriesRouter

