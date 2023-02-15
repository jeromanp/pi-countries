import style from "./NavBar.module.css"
import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <div className={style.mainContainer}>
            <nav className={style.navbar}>                
            <Link to="/home">Home</Link>
            <Link to="/activities">Create Activity</Link>
            <Link to="/about">About</Link>
            <Link to="/">Exit</Link>
            </nav>
        </div>
    )
}

export default NavBar