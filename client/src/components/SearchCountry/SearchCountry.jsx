import style from "./SearchCountry.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  searchCountry,
  orderAlphabetic,
  filterContinents,
  orderPopulation,
  resetState,
  getAllActivity,
} from "../../redux/actions/actions";

const SearchCountry = () => {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState("");

  const handleInputSearchCountry = (e) => {
    e.preventDefault();
    setSearchName(e.target.value);
  };

  const handleClickSearchCountry = (e) => {
    e.preventDefault();
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

  const handleClickAll = () => {
    dispatch(getAllActivity());
  };

  useEffect(() => {
    dispatch(getAllActivity());
  }, [dispatch]);

  return (
    <div>
      <div className={style.container}>
        <div className={style.buttonClear}>
          <button onClick={() => dispatch(resetState())}>Clear Filters</button>
          <hr />
        </div>

        <h1>Search Country</h1>
        <div className={style.search}>
          <input
            type="text"
            value={searchName}
            onChange={handleInputSearchCountry}
            placeholder="Country"
          />
          <button className={style.search} onClick={handleClickSearchCountry}>
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

          <div className={style.getActivity}>
            <Link to="/getactivities">
              <hr />
              <button onClick={handleClickAll}>Get All Activity</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchCountry;
