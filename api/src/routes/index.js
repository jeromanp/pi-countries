const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios");
const { Country } = require("../db");

const countriesRouter = require("./countriesRouter");
const activityRouter = require("./activityRouter");

const router = Router();

const url = "https://restcountries.com/v3/all";

//funcion que me mostrara que valores quiero en la bdd
const showApiValues = (array) => {
  return array.map((element) => {
    return {
      id: element.cca3,
      name: element.name.common,
      continent: element.continents,
      capital: element.capital
        ? element.capital[0]
        : "Este pais no tiene capital.",
      flag: element.flags[0],
      continent: element.continents[0],
      subregion: element.subregion,
      area: element.area,
      population: element.population,
      latitude:element.latlng,
      timezones:element.timezones,
      map:element.maps.googleMaps,
    };
  });
};

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countriesRouter);
router.use("/activities", activityRouter);

module.exports = router;

const data = async () => {
  const arr = await axios.get(url);
  // console.log("TODA LA INFO DE LA API", arr.data);
  const dataApi = arr.data;
  // console.log("INFO QUE NECESITO EN MI DB, ", showApiValues(dataApi));
  return showApiValues(dataApi);
};

const validateDate = async () => {
  try {
    const countryData = await data();
    // console.log("INFO QUE NECESITO", countryData);
    let existeData = await Country.count();
    console.log("PREV", existeData);
    if (existeData === 0) {
      await Country.bulkCreate(countryData);
    }
    // console.log("POST",existeData);
    console.log("POST CREATE", await Country.count());
  } catch (error) {
    console.error(error);
  }
};
validateDate();
