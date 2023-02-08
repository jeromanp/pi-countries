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
          </div>
      </div>
    );
  };

export default Card;
