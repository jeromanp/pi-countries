import style from "./CardContainer.module.css"
import Card from "../Card/Card";
import {  useSelector } from "react-redux";


const CardsContainer = () => {
//   const countries = [
//     {
//       name: "Czechia",
//       continent: "Europe",
//     },
//     {
//       name: "Malta",
//       continent: "Europe",
//     },
//     {
//       name: "Malaysia",
//       continent: "Asia",
//     },
//     {
//       name: "Panama",
//       continent: "North America",
//     },
//   ];

  const countries = useSelector(state=>state.countries)

  return (
    <div className={style.container}>
      {countries.map((country) => {
        return <Card name={country.name} continent={country.continent} />;
      })}
    </div>
  );
};

export default CardsContainer;
