import { GET_COUNTRIES, GET_COUNTRY, SEARCH_NAME } from "../actions/type_actions"

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
    default:
      return { ...state };
  }
};

export default rootReducer;
