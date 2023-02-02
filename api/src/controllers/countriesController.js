//const axios = require("axios")
//const url =  "https://restcountries.com/v3/all"

const getAllFroms = (req, res) => {
    //esta funcion debera traer todos los paises desde la api-rest
    //guardar los datos en la BDD para utilizarlos desde ahi
}

const getFromById = (req, res) => {
    //esta funcion debera obtener el detalle de un país en particular
    //Debe traer solo los datos pedidos en la ruta de detalle de país.
    //Incluir los datos de las actividades turísticas correspondientes
}

const filterFroms = (req, res) => {
    //esta funcion debera obtener un listado de los paises
    //Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto).
    //Si no existe ningún país mostrar un mensaje adecuado
}

//EXTRA - Contemplar agregar la ruta

//const createFrom = (res, res) => {}

//const deleteFrom = (res, res) => {}

module.exports = {
    getAllFroms,
    getFromById,
    filterFroms,
}
