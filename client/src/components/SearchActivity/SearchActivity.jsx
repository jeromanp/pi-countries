import style from "./SearchActivity.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { filterByActivity } from "../../redux/actions/actions";

const SearchActivity = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [searchAct, setSearchAct] = useState("");

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
    </div>
  );
};

export default SearchActivity;
