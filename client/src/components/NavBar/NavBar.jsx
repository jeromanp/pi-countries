import style from "./NavBar.module.css"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className={style.mainContainer}>
            <Link to="/home">Home</Link>
            <Link to="/activities">Crear Actividad</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default NavBar