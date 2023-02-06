import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountry, orderCountries } from "../../redux/actions/actions";

const SearchCountry = () => {
  const dispatch = useDispatch();

  const [searchName, setSearchName] = useState("");

  const handleSearch = (e) => {
    setSearchName(e.target.value);
  };

  const handleClick = () => {
    dispatch(searchCountry(searchName));
  };

  function handleSelectOrder(event) {
    event.preventDefault();
    const { name, value } = event.target;

    if (name === "Order") {
      return dispatch(orderCountries(value));
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
        onChange={handleSelectOrder}
      >
        <option value="Default" disabled>
          Select Order
        </option>

        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
    </div>
  );
};

export default SearchCountry;
