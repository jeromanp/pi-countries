import CardsContainer from "../CardsContainer/CardsContainer"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getCountries } from "../../redux/actions/actions"

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountries())        
    },[dispatch])

    return(
        <>
            <h1>Estoy en Home</h1>
            <CardsContainer />
        </>
    )
}


export default Home