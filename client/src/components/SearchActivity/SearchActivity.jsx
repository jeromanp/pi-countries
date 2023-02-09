import style from "./SearchActivity.module.css";
import { useDispatch /*useSelector*/ } from "react-redux";
import { useState } from "react";
import { filterByActivity, getAllActivity } from "../../redux/actions/actions";

const SearchActivity = () => {
  const dispatch = useDispatch();

  //   const countries = useSelector((state) => state.countries);
  const [searchAct, setSearchAct] = useState("");

  const handleClickAll = () => {
    dispatch(getAllActivity());
  };

  const handleClick = () => {
    dispatch(filterByActivity(searchAct));
  };

  const handleSearchAct = (e) => {
    setSearchAct(e.target.value);
  };

  return (
    <div className={style.container}>
      <button onClick={handleClickAll}>Get All Activity</button>
      <h1>Search Activity</h1>

      <div className={style.search}>
        <input
          type="text"
          value={searchAct}
          onChange={handleSearchAct}
          placeholder="Activity"
        />
        <button className={style.search} onClick={handleClick}>
        🔍
        </button>
      </div>
    </div>
  );
};

export default SearchActivity;
