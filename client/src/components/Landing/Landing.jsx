import style from "./Landing.module.css"

const Landindg = (props) => {

    function toHome(){
        return props.history.push("/home")
    }

    return(
        <div className={style.container}>
            <h1>Click to start</h1>
            <button onClick={toHome}>Iniciar</button>
        </div>
    )
}


export default Landindg