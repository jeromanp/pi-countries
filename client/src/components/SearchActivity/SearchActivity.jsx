import style from "./SearchActivity.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { filterByActivity } from "../../redux/actions/actions";

const SearchActivity = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.countries);
  const [searchAct, setSearchAct] = useState("");
console.log(country);

  const handleClick = () => {
    dispatch(filterByActivity(searchAct));
    setSearchAct("");
  };

  const handleSearchAct = (e) => {
    setSearchAct(e.target.value);
  };

  return (
    <div className={style.container}>
      <h1>Search Activity</h1>
      <div className={style.search}>
        <input
          type="text"
          value={searchAct}
          onChange={handleSearchAct}
          placeholder="Name of the activity"
        />
        <button onClick={handleClick}>
          🔍
        </button>
      </div>
      <div>
      {country ? (
        <div>
          <div className={style.text}>
          <p>hola</p>
          <img src={country.flag} alt={country.name} />
          <p>Name: {country.name}</p>


            
          </div>
        </div>
      )
       : (
        <div>Loading...</div>
      )}
      </div>

      
    </div>
  );
};

export default SearchActivity;
