//estas funcion interactuan con el modelo de sequelize
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");
const {sequelize} = require ("../db")

//funcion que me retornara todos los countries
const getAllCountries = async () => {
  return await Country.findAll({
    
    attributes: ['id','name', 'continent', 'flag', 'capital','subregion', 'area', 'population'],    
  });
};

//funcion que retornara las coincidencias obtenidas por name
const filterByName = (countries, name) => {
  return countries.filter((country) =>
    country.name.toLowerCase().startsWith(name.toLowerCase())
  );
};

//funcion que buscara las coincidencias de name en la bdd
const findCountryByName = async (name) => {
  const apiCountries = await Country.findAll();
  const filteredCountries = filterByName(apiCountries, name);
  if (filteredCountries.length === 0) {
    throw Error(`No se encuentran coincidencias con el NAME ${name}`);
  }
  return [...filteredCountries];
};

const getCountryById = async (id) => {
  const findCountry = await Country.findByPk(id);
  if (!findCountry) {
    throw Error(`No se encontró el country con ID ${id}`);
  }
  return findCountry;
};

module.exports = {
  getAllCountries,
  findCountryByName,
  getCountryById,
};

