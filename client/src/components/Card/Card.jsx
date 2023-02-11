import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    // <div className={style.card}>
    //   {/* <Link to={`/detail/${props.id}`}> */}
    //     {props.flag && <img src={props.flag} alt={props.name + " flag"} />}
    //   {/* </Link> */}

    //   <div className={style.text}>
    //     {props.name && <p>Name: {props.name}</p>}
    //     {props.continent && <p>Continent: {props.continent}</p>}
    //     {props.capital && <p>Capital: {props.capital}</p>}
    //     {props.subregion && <p>Subregion: {props.subregion}</p>}
    //     {props.area && <p>Area: {props.area}</p>}
    //     {props.population && <p>Population: {props.population}</p>}
    //     {props.src && <img src={props.src} alt={props.name} />}
    //   </div>
    //   <div>
    //   <Link to={`/detail/${props.id}`}>
    //     <button className={style.button}>See More</button>
    //   </Link>
    //   </div>
    // </div>
    <div className={style.card}>
      <div className={style.cardDetail}>
      {props.flag && <img src={props.flag} alt={props.name + " flag"} />}
        <p className={style.textTitle}>{props.name}</p>
        <p className={style.textBody}>Continent: {props.continent}</p>
        {/* <p className={style.textBody}>{props.id}</p> */}
      </div>
      <Link to={`/detail/${props.id}`}>      
      <button className={style.cardButton}>More info</button>
      </Link>
    </div>
  );
};

export default Card;


