import { GET_COUNTRIES, GET_COUNTRY, SEARCH_NAME, ORDER_COUNTRIES, FILTER_CONTINENTS } from "../actions/type_actions"

const initialState = {
  countries: [],  
  
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
        return { ...state, countries:action.payload }
    case GET_COUNTRY:
        return { ...state, country:action.payload}
    case SEARCH_NAME:       
        return {...state, countries:action.payload}
    case ORDER_COUNTRIES:
        const orderCountries = [...state.countries]
        const order = orderCountries.sort((a,b)=>{
          if(a.id > b.id){
            return "Ascendente" === action.payload ? 1 : -1
          }
          if((a.id < b.id)){
            return "Descendente" === action.payload ? 1 : -1
          }
          else{
            return 0
          }
        })
        return { ...state, countries:order }  
      case FILTER_CONTINENTS:
        const filterContinent = [ ...state.countries]
        const filterByCountries = filterContinent.filter((country)=>country.continent === action.payload)
        return { ...state, countries:filterByCountries}      
    default:
      return { ...state };
  }
};

export default rootReducer;
