import React from "react";
import style from "./Detail.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getCountry } from "../../redux/actions/actions";
import Loading from "../Loading/Loading";

const Detail = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);

  console.log(country);

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
      {country ? (
        <div>
          <div className={style.text}>
            <h1>Country Detail</h1>
            <img src={country.flag} alt={country.name} />
            <p>ID: {country.id}</p>
            <p>Name: {country.name}</p>
            <p>:Continent {country.continent}</p>
            <p>Capital: {country.capital}</p>
            <p>Subregion: {country.subregion}</p>
            <p>Area: {country.area}</p>
            <p>Population: {country.population}</p>
          </div>
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Detail;
