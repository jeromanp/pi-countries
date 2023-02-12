import { useEffect, useState } from "react";
import style from "./Paginado.module.css";
// import { useEffect } from "react
import Loading from "../Loading/Loading";

const Paginado = ({ charactersPerPage, countries, paginado }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(countries / charactersPerPage); i++) {
    pageNumbers.push(i);
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <nav>
      <ul className={style.paginado}>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li className={style.number} key={number}>
              <button onClick={() => paginado(number)}>{number}</button>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Paginado;
