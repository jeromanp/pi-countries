import style from "./Home.module.css"
import CardsContainer from "../CardsContainer/CardsContainer"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getCountries } from "../../redux/actions/actions"
import SearchCountry from "../SearchCountry/SearchCountry"
import SearchActivity from "../SearchActivity/SearchActivity"

const Home = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getCountries())        
    },[dispatch])

    return(
        <div className={style.container}>            
            <nav className={style.navbar}>
                <SearchCountry />
                <SearchActivity />
            </nav>
            <h1>Estoy en Home</h1>
            <CardsContainer />
        </div>
    )
}

export default Home