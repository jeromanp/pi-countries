import style from "./Paginado.module.css";

const Paginado = ({ charactersPerPage, countries, paginado }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(countries / charactersPerPage); i++) {
    pageNumbers.push(i);
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
