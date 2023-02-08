import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  searchCountry,
  orderAlphabetic,
  filterContinents,
  orderPopulation,
  resetState,
} from "../../redux/actions/actions";

const SearchCountry = () => {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState("");

  const [selectedContinent, setSelectedContinent] = useState();

  useEffect(() => {
    dispatch(filterContinents(selectedContinent));
    dispatch(resetState());
  }, [selectedContinent, dispatch]);

  const continet = (e) => {
    dispatch(filterContinents(e.target.value));
  };

  const handleSearch = (e) => {
    setSearchName(e.target.value);
  };

  const handleClick = () => {
    dispatch(searchCountry(searchName));
  };

  function handleSelect(event) {
    event.preventDefault();
    const { name, value } = event.target;

    if (name === "Filter Continent") {
      setSelectedContinent(value);
    }
    if (name === "Order Alphabetic") {
      return dispatch(orderAlphabetic(value));
    }
    if (name === "Order Population") {
      return dispatch(orderPopulation(value));
    }
  }

  return (
    <div>
      <div>
        <button onClick={() => dispatch(resetState())}>Clear Filters</button>

        <h1>Buscando Country</h1>
        <input
          type="text"
          value={searchName}
          onChange={handleSearch}
          placeholder="Name of Country"
        />
        <button onClick={handleClick}>Search</button>
      </div>

      <select
        name="Filter Continent"
        defaultValue={"Default"}
        onChange={continet}
      >
        <option value="Default" disabled>
          Select Continent
        </option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
        <option value="South America">South America</option>
      </select>

      <select
        name="Order Alphabetic"
        defaultValue={"Default"}
        onChange={handleSelect}
      >
        <option value="Default" disabled>
          Select Alphabetic Order
        </option>

        <option value="AZ">AZ</option>
        <option value="ZA">ZA</option>
      </select>

      <select
        name="Order Population"
        defaultValue={"Default"}
        onChange={handleSelect}
      >
        <option value="Default" disabled>
          Select Population Order
        </option>

        <option value="Higher Population">Higher Population</option>
        <option value="Lower Population">Lower Population</option>
      </select>
    </div>
  );
};
export default SearchCountry;
