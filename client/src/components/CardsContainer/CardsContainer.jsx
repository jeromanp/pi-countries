import style from "./CardContainer.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const countries = useSelector((state) => state.countries);

  return (
    <div className={style.container}>
      {countries.map((country) => {
        return (
          <Card
            key={country.id}
            id={country.id}
            name={country.name}
            continent={country.continent}
            flag={country.flag}
            season={country.season}
            difficulty={country.difficulty}
            duration={country.duration}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
