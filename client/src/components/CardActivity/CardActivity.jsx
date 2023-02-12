import style from "./CardActivity.module.css";

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
      <div className={style.content}>
        {props.countryFlag && <img src={props.countryFlag} alt={props.countryName} />}       
      </div>
    </div>
  );
};

export default CardActivity;
