import style from "./Activities.module.css";
import { useSelector } from "react-redux";
import SearchActivity from "../SearchActivity/SearchActivity";
import CardActivity from "../CardActivity/CardActivity";
// import { resetState } from "../../redux/actions/actions";
// import { useDispatch } from "react-redux";

const Activities = (props) => {
  const activity = useSelector((state) => state.countries);
  console.log(activity);

  //   const dispatch = useDispatch();

  function backtoHome() {
    return props.history.push("/home");
  }

  return (
    <div className={style.container}>
      <div>
        <button onClick={backtoHome}>To Home</button>
      </div>

      <div>
        <SearchActivity />
      </div>
      <div className={style.cardActivity}>
        {activity?.map((c) => {
          return (
            <CardActivity
              key={c.id}
              id={c.id}
              name={c.name}
              flag={c.flag}
              continent={c.continent}
              difficulty={c.difficulty}
              duration={c.duration}
              season={c.season}
              // src="https://img.freepik.com/vector-premium/diseno-viajes-turismo_24908-34483.jpg"
              // alt="img"
              activityId={c.activityId}
              activityName={c.activityName}
              countryId={c.countryId}
              countryName={c.countryName}
              countryFlag={c.countryFlag}



            />
          );
        })}
      </div>
    </div>
  );
};

export default Activities;
