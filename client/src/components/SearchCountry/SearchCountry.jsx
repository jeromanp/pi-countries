import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountry, orderCountries, filterContinent } from "../../redux/actions/actions";

const SearchCountry = () => {
  const dispatch = useDispatch();

  const [searchName, setSearchName] = useState("");

  const handleSearch = (e) => {
    setSearchName(e.target.value);
  };

  const handleClick = () => {
    dispatch(searchCountry(searchName));
  };

  function handleSelect(event) {
    event.preventDefault();
    const { name, value } = event.target;

    if (name === "Order") {
      return dispatch(orderCountries(value));
    }
    if(name === "Filter Continent"){
        return dispatch(filterContinent(value))
    }
  }

  return (
    <div>
      <div>
        <h1>Buscando Country</h1>
        <input type="text" value={searchName} onChange={handleSearch} />
        <button onClick={handleClick}>Search</button>
      </div>

      <select
        name="Order"
        defaultValue={"Default"}
        onChange={handleSelect}
      >
        <option value="Default" disabled>
          Select Order
        </option>

        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>

      <select
              name="Filter Continent"
              defaultValue={"Default"}
              onChange={handleSelect}
            >
              <option value="Default" disabled>
                Select Filter
              </option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="North America">North America</option>
              <option value="Oceania">Oceania</option>
              <option value="South America">South America</option>
            </select>
    </div>
  );
};

export default SearchCountry;
