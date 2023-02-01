const {Router} = require("express")
//const {Country} = require ("../db")
//const axios = require("axios")

const countriesRouter = Router()
//const url =  "https://restcountries.com/v3/all"

countriesRouter.get("/",(req,res)=>{
    res.send("Estoy en Countries");
})



module.exports = countriesRouter

