const Landindg = (props) => {

    function toHome(){
        return props.history.push("/home")
    }

    return(
        <>
            <h1>Estoy en Landindg</h1>
            <button onClick={toHome}>Iniciar</button>
        </>
    )
}


export default Landindg