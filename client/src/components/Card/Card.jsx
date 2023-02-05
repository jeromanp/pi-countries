import style from "./Card.module.css"

const Card = (props) => {
    return(
        <div className={style.card}>
            <p>Name: {props.name}</p>
            <p>Continent: {props.continent}</p>
            <img src={props.flag} alt={props.name + " flag"} />
        </div>
    )
}

export default Card