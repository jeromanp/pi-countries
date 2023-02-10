import React from "react";
import style from "./Paginado.module.css"

const Paginado = ({charactersPerPage,countries,paginado}) =>{
    const pageNumbers = []

    for(let i=0; i<=Math.ceil(countries/charactersPerPage); i++){
        pageNumbers.push(i+1)
    }

    return(
        <nav>
            <ul className={style.paginado}>
                {pageNumbers && 
                pageNumbers.map(number => (
                    <li className={style.number} key={number}>
                        <a onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Paginado