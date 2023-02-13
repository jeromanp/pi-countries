import axios from "axios";
import {
  GET_COUNTRIES,
  GET_COUNTRY,
  SEARCH_NAME,
  FILTER_CONTINENTS,
  ORDER_ALPHABETIC,
  RESET_STATE,
  ORDER_POPULATION,
  FILTER_BY_ACTIVITY,
  GET_ALL_ACTIVITIES,
} from "./type_actions";

export function getCountries() {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/countries");
    //const apiData = await axios.get("https://jsonplaceholder.typicode.com/users")
    //para ver si trabaja bien redux
    const countries = apiData.data;
    // console.log(countries);
    dispatch({
      type: GET_COUNTRIES,
      payload: countries,
    });
  };
}

export function getCountry(id) {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/countries/${id}`);
    const country = apiData.data;
    dispatch({
      type: GET_COUNTRY,
      payload: country,
    });
  };
}

export function searchCountry(name) {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(
        `http://localhost:3001/countries?name=${name}`
      );
      const search = apiData.data;
      console.log(search);
      dispatch({
        type: SEARCH_NAME,
        payload: search,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
}

export function filterContinents(data) {
  return {
    type: FILTER_CONTINENTS,
    payload: data,
  };
}

export function resetState() {
  return {
    type: RESET_STATE,
  };
}

export function orderAlphabetic(payload) {
  return {
    type: ORDER_ALPHABETIC,
    payload,
  };
}

export function orderPopulation(orderAlpha) {
  return {
    type: ORDER_POPULATION,
    payload: orderAlpha,
  };
}

export function getAllActivity() {
  return async function (dispatch) {
    try {
      const apiData = await axios.get("http://localhost:3001/activities");
      const result = apiData.data;
      //me trae el array de Actividades con Countries
      // console.log(result);
      dispatch({
        type: GET_ALL_ACTIVITIES,
        payload: result,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function filterByActivity(name) {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(
        `http://localhost:3001/activities?name=${name}`
      );
      const search = apiData.data;
      //me trae las propiedades segun la busqueda
      console.log(search);
      let countriesProperties = [];

      search.forEach(element => {
        element.Countries.forEach(country => {
          let countryProperties = {
            id: country.id,
            name: country.name,
            flag: country.flag
          };
          countriesProperties.push(countryProperties);
        });
      });
      //me obtiene name y flag
      console.log(countriesProperties);
      dispatch({
        type:FILTER_BY_ACTIVITY, 
        payload:countriesProperties,
      })       
    } catch (error) {
      alert(error.response.data.error);
    }
  };
}
