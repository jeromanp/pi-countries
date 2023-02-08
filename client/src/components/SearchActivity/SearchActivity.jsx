import style from "./SearchActivity.module.css";
import { useDispatch, /*useSelector*/ } from "react-redux";
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
      <h1>Buscando Activity</h1>
        <div>
      <button onClick={handleClickAll}>Get All Activity</button>
            
        </div>
      <input
        type="text"
        value={searchAct}
        onChange={handleSearchAct}
        placeholder="Name of Country"
      />
      <button onClick={handleClick}>Search Activity</button>
    </div>
  );
};

export default SearchActivity;
