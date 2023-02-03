//estas funcion interactuan con el modelo de sequelize
const { Country } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");

const url = "https://restcountries.com/v3/all";

//funcion que me mostrara que valores quiero en la bdd
const showApiValues = (array) => {
    return array.map((element) => {
      return {
        id: element.cca3,
        name: element.name.common,
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

//funcion que solicita la info a la api y guarda en la bdd
//se autoejecuta
(async function(){
    const dataApi = (await axios.get(url)).data;
    await Country.bulkCreate(showApiValues(dataApi));
    return dataApi;
  })()


//funcion que me retornara todos los countries
const getAllCountries = async () => {
  return await Country.findAll();  
};

//funcion que retornara las coincidencias obtenidas por name
const filterByName = (countries, name) => {
  return countries.filter((country) =>
    country.name.toLowerCase().includes(name.toLowerCase())
  );
};

//funcion que buscara las coincidencias de name en la bdd
const findCountryByName = async (name) => {
    const apiCountries = await Country.findAll()
    const filteredCountries = filterByName(apiCountries, name);
    if(filteredCountries.length === 0){
      throw Error(`No se encuentran coincidencias con el NAME = ${name}`)
    }
    return [...filteredCountries];
  };

const getCountryById = async (id) => {
  if (isNaN(id)) {
    throw Error(`El ${id} no es un numero`);
  }
  const findCountry = Country.findByPk(id);
  if (!findCountry) {
    throw Error(`No se encontró la actividad con ID ${id}`);
  }
  return findCountry;
};

module.exports = {
  getAllCountries,
  findCountryByName,
  getCountryById,
};

//para implementacion

/*
const getCountryId = (id, source) =>{
    const country = 
        source === "api" 
        ? (await axios.get(url)).data
        :await Country.findByPk(id)
    return country
}

const getCountryHandler = asunc (req, res)=>{
    const {id} = req.params

    const source = isNaN(id) ? "bdd" : "api"

    try{
        const country = await getCountryId (id, source)
        res.status(200).json(country)
    } catch{
    res.status(400).json({ error: error.message });
    }
}
*/
