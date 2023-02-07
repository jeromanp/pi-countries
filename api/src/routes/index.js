const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios");
const { Country } = require("../db");

const countriesRouter = require("./countriesRouter")
const activityRouter = require("./activityRouter")

const router = Router();

const url = "https://restcountries.com/v3/all";

//funcion que me mostrara que valores quiero en la bdd
const showApiValues = (array) => {
    return array.map((element) => {
      return {
        id: element.cca3,
        name: element.name.common,
        continent:element.continents,
        capital: element.capital
          ? element.capital[0]
          : "Este pais no tiene capital.",
        flag: element.flags[0],
        continent: element.continents[0],
        subregion: element.subregion,
        area: element.area,
        population: element.population,
        created: false,
      };
    });
  };

let dataFetched = false;
//se busca que se ejecute una sola vez
const getDataApi = async () => {
  try {
    if (!dataFetched) {
      const dataApi = (await axios.get(url)).data;
      await Country.bulkCreate(showApiValues(dataApi));
      dataFetched = true;
      return dataApi;
    }    
  } catch (error) {
    console.error(error);   
  }
};
getDataApi()

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countriesRouter)
router.use("/activities", activityRouter)


module.exports = router;
