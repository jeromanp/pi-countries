import style from "./Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions/actions";
import SearchCountry from "../SearchCountry/SearchCountry";
import Paginado from "../Paginado/Paginado";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  //guardar en un estado local y setee el estado y lo inicie en 1
  const [currentPage, setCurrentPage] = useState(1);
  //estado, de cuantos cards van por pagina
  //eslint-disable-next-line
  const [charactersPerPage, setCharactersPerPage] = useState(10);
  const indexOfLastCharacter = currentPage * charactersPerPage; //10
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage; //0
  const currentCharacters = countries.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const [loading, setLoading] = useState(true);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCountries());
    setLoading(false);
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={style.container}>
      <nav className={style.navbar}>
        <SearchCountry />
      </nav>

      {currentCharacters?.map((c) => {
        return (
          <Card
            key={c.id}
            id={c.id}
            name={c.name}
            flag={c.flag}
            continent={c.continent}
            difficulty={c.difficulty}
            duration={c.duration}
            season={c.season}
          />
        );
      })}

      <div>
        <footer>
          <Paginado
            charactersPerPage={charactersPerPage}
            countries={countries.length}
            paginado={paginado}
          />
        </footer>
      </div>
    </div>
  );
};

export default Home;
