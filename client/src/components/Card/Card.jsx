import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
    
    return (
      <div className={style.card}>
          <Link to={`/detail/${props.id}`}>
              {props.flag && <img src={props.flag} alt={props.name + " flag"} />}        
          </Link>

          <div className={style.text}>            
        {props.id && <p>ID: {props.id}</p>}
        {props.name && <p>Name: {props.name}</p>}
        {props.continent && <p>Continent: {props.continent}</p>}
        {props.capital && <p>Capital: {props.capital}</p>}
        {props.subregion && <p>Subregion: {props.subregion}</p>}
        {props.area && <p>Area: {props.area}</p>}
        {props.population && <p>Population: {props.population}</p>}
        {props.season && <p>Season: {props.season}</p>}
        {props.difficulty && <p>Dificulty: {props.difficulty}</p>}
        {props.duration && <p>Duration: {props.duration}</p>}
        {props.src && <img src={props.src} alt={props.name} />}
          </div>
      </div>
    );
  };

export default Card;
