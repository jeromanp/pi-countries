import {
  GET_COUNTRIES,
  GET_COUNTRY,
  SEARCH_NAME,
  ORDER_ALPHABETIC,
  FILTER_CONTINENTS,
  RESET_STATE,
  ORDER_POPULATION,
  FILTER_BY_ACTIVITY,
  GET_ALL_ACTIVITIES,
} from "../actions/type_actions";

const initialState = {
  countries: [],
  allCountries: [],
  filter: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };

    case GET_COUNTRY:
      return { ...state, country: action.payload };

    case SEARCH_NAME:
      return { ...state, countries: action.payload };

    case FILTER_CONTINENTS:
      const allCountries = [...state.allCountries];
      let filterContinents;
      if (action.payload === "All") {
        filterContinents = allCountries;
      } else {
        filterContinents = allCountries.filter(
          (e) => e.continent === action.payload
        );
      }
      return {
        ...state,
        countries: filterContinents,
      };

    case ORDER_ALPHABETIC:
      const countriesAlpha = [...state.countries];
      let orderedCountries;
      if (action.payload === "None") {
        orderedCountries = countriesAlpha;
      } else {
        if (action.payload === "AZ") {
          orderedCountries = countriesAlpha.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
        } else if (action.payload === "ZA") {
          orderedCountries = countriesAlpha.sort((a, b) =>
            b.name.localeCompare(a.name)
          );
        } else {
          orderedCountries = countriesAlpha;
        }
      }
      return {
        ...state,
        countries: orderedCountries,
      };

    case ORDER_POPULATION:
      const countriesPopulation = [...state.countries];
      let filterPopulation;
      if (action.payload === "None") {
        filterPopulation = countriesPopulation;
      } else {
        if (action.payload === "Higher Population") {
          filterPopulation = countriesPopulation.sort((a, b) => {
            if (a.population > b.population) {
              return -1;
            }
            if (a.population < b.population) {
              return 1;
            }
            return 0;
          });
        } else if (action.payload === "Lower Population") {
          filterPopulation = countriesPopulation.sort((a, b) => {
            if (a.population < b.population) {
              return -1;
            }
            if (a.population > b.population) {
              return 1;
            }
            return 0;
          });
        } else {
          filterPopulation = countriesPopulation;
        }
      }

      return {
        ...state,
        countries: filterPopulation,
      };

    case FILTER_BY_ACTIVITY:
      return {
        ...state,
        filter: action.payload,
      };
    case GET_ALL_ACTIVITIES:
      return { ...state, filter: action.payload };

    case RESET_STATE:
      const init = [...state.allCountries];
      //console.log("INIT", init);
      return { ...state, countries: init };

    default:
      return { ...state };
  }
};

export default rootReducer;
