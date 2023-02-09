import style from "./Landing.module.css"

const Landindg = (props) => {

    function toHome(){
        return props.history.push("/home")
    }

    return(
        <div className={style.container}>
            <h1>P.I. COUNTRIES</h1>
            <h2>Click to start</h2>
            <button onClick={toHome}>Iniciar</button>
        </div>
    )
}


export default Landindg