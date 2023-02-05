import axios from "axios"
import { GET_COUNTRIES } from "./type_actions"

export function getCountries () {
    return async function (dispatch){
        const apiData = await axios.get("http://localhost:3001/countries")
        //const apiData = await axios.get("https://jsonplaceholder.typicode.com/users")
        //para ver si trabaja bien redux
        const countries = apiData.data
        dispatch({
            type: GET_COUNTRIES,
            payload:countries,
        })
    }
    
}