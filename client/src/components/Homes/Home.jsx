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
  //solicita countries
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

  console.log(countries);
  // console.log(currentCharacters);

  //para componenete load
  const [loading, setLoading] = useState(false);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //se monta el componente y se ejecuta para trabajar con los datos
  useEffect(() => {
    try {
      setLoading(true);
      dispatch(getCountries());
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  return (
    <div className={style.container}>
      <nav className={style.navbar}>
        {/* componenete para search y select de busqueda de countries */}
        <SearchCountry />
      </nav>
      <div>
        <Paginado
          charactersPerPage={charactersPerPage}
          countries={countries.length}
          paginado={paginado}
        />
      </div>

      {loading ? (
        <Loading />
      ) : (
        currentCharacters?.map((c) => (
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
        ))
      )}
    </div>
  );
};

export default Home;
