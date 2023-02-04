import style from "./Card.module.css"

const Card = (props) => {
    return(
        <div className={style.card}>
            <p>Name: {props.name}</p>
            <p>Continent: {props.continent}</p>

        </div>
    )
}

export default Card