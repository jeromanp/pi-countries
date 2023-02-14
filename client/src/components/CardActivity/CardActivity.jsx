import style from "./CardActivity.module.css";
import {Link}  from "react-router-dom"

const CardActivity = (props) => {
  return (
    <div className={style.card}>
      <div className={style.text}>
        {props.id && <p>ID: {props.id}</p>}
        {props.name && <p>Name: {props.name}</p>}
        {props.season && <p>Season: {props.season}</p>}
        {props.difficulty && <p>Dificulty: {props.difficulty}</p>}
        {props.duration && <p>Duration: {props.duration}</p>}
      
      </div>
      <Link to={`/detail/${props.id}`}>
      <div className={style.content}>
        {props.flag && <img src={props.flag} alt={props.name} />}       
      </div>
      </Link>
    </div>
  );
};

export default CardActivity;
