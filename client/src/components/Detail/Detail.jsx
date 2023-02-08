import React from "react";
import style from "./Detail.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { useEffect } from "react";
import { getCountry } from "../../redux/actions/actions";

const Detail = (props) => {
  const { id } = useParams();
  

  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);

  function backtoHome() {
    return props.history.push("/home");
  }

  useEffect(() => {
    dispatch(getCountry(id));
  }, [dispatch, id]);

  return (
    <div className={style.container}>
      <div>
        <button onClick={backtoHome}>To Home</button>
      </div>
      <div>
        
      <h1>Estoy en Detail</h1>
      {country && <img src={country.flag} alt={country.name + " flag"} />}
      {country && <p>ID: {country.id}</p>}
      {country && <p>Name: {country.name} </p>}
      {country && <p>Capital: {country.capital}</p>}
      {country && <p>Subregion: {country.subregion} </p>}
      {country && <p>Area: {country.area} km<sup>2</sup>
 </p>}
      {country && <p>Population: {country.population} aprox. </p>}
      </div>
    </div>
  );
};

export default Detail;
