import style from "./Card.module.css"

const Card = (props) => {
    return(
        <div className={style.card}>
            <img src={props.flag} alt={props.name + " flag"} />
            <p>Name: {props.name}</p>
            <p>Continent: {props.continent}</p>
        </div>
    )
}

export default Card