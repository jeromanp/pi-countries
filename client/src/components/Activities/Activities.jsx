import style from "./Activities.module.css";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const Activities = (props) => {
  const countries = useSelector((state) => state.countries);
  console.log(countries);

  function backtoHome() {
    return props.history.push("/home");
  }

  return (
    <div className={style.container}>
        <div>
        <button onClick={backtoHome}>To Home</button>
      </div>
      <h1>All Activities</h1>
      <div>
        {countries?.map((c) => {
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
              src="https://img.freepik.com/vector-premium/diseno-viajes-turismo_24908-34483.jpg"
              alt="img"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Activities;