import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (   
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


