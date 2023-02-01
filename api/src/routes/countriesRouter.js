const {Router} = require("express")
//const {Country} = require ("../db")
//const axios = require("axios")

const countriesRouter = Router()
//const url =  "https://restcountries.com/v3/all"

countriesRouter.get("/",(req,res)=>{
    res.send("NIY: Esta ruta debera traer todos los paises desde la rest y guardarlos en mi BDD para luego utilizarlos desde ahi. ");
})

countriesRouter.get("/:idPais",(req,res)=>{
    res.send("NIY: Obtener el detalle de un país en particular.Debe traer solo los datos pedidos en la ruta de detalle de país.Incluir los datos de las actividades turísticas correspondientes")
})

countriesRouter.get("/name=",(req, res)=>{
    res.send("Obtener un listado de los paises.Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto). Si no existe ningún país mostrar un mensaje adecuado")
})


//EXTRA




module.exports = countriesRouter

