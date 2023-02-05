import axios from "axios"
import { GET_COUNTRIES, GET_COUNTRY } from "./type_actions"

export function getCountries () {
    return async function (dispatch){
        const apiData = await axios.get("http://localhost:3001/countries")
        //const apiData = await axios.get("https://jsonplaceholder.typicode.com/users")
        //para ver si trabaja bien redux
        const countries = apiData.data
        dispatch({
            type:GET_COUNTRIES,
            payload:countries,
        })
    }    
}

export function getCountry (id) {
    return async function(dispatch){
        const apiData = await axios.get(`http://localhost:3001/countries/${id}`)
        const country = apiData.data
        dispatch({
            type:GET_COUNTRY,
            payload:country
        })
    }
}