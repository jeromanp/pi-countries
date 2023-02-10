import style from "./SearchCountry.module.css";
import { useState } from "react";
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

  const handleSearch = (e) => {
    setSearchName(e.target.value);
  };

  const handleClick = () => {
    dispatch(searchCountry(searchName));
    setSearchName("");
  };

  function handleSelect(event) {
    event.preventDefault();
    const { name, value } = event.target;

    if (name === "Filter Continent") {
      return dispatch(filterContinents(value));
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
      <div className={style.container}>
        <div>
          <button onClick={() => dispatch(resetState())}>Clear Filters</button>
          <hr />
        </div>

        <h1>Search Country</h1>
        <div className={style.search}>
          <input
            type="text"
            value={searchName}
            onChange={handleSearch}
            placeholder="Country"
          />
          <button className={style.search} onClick={handleClick}>
            🔍
          </button>
        </div>

        <div>
          <hr />
          <h1>Filters</h1>
          <br />
          <select
            name="Filter Continent"
            defaultValue={"Default"}
            onChange={handleSelect}
          >
            <option value="Default" disabled>
              Select Continent
            </option>
            <option value="All">All Countries</option>
            <option value="Africa">Africa</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="Oceania">Oceania</option>
            <option value="South America">South America</option>
          </select>
        </div>

        <div>
          <select
            name="Order Alphabetic"
            defaultValue={"Default"}
            onChange={handleSelect}
          >
            <option value="Default" disabled>
              Select Alphabetic Order
            </option>

            <option value="None">None</option>            
            <option value="AZ">AZ</option>
            <option value="ZA">ZA</option>
          </select>
        </div>

        <div>
          <select
            name="Order Population"
            defaultValue={"Default"}
            onChange={handleSelect}
          >
            <option value="Default" disabled>
              Select Population Order
            </option>

            <option value="None">None</option>  
            <option value="Higher Population">Higher Population</option>
            <option value="Lower Population">Lower Population</option>
          </select>
          <hr />
        </div>
      </div>
    </div>
  );
};
export default SearchCountry;
