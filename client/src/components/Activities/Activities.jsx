import style from "./Activities.module.css";
import { useSelector, useDispatch } from "react-redux";
import CardActivity from "../CardActivity/CardActivity";
import { useEffect, useState } from "react";
import { getAllActivity } from "../../redux/actions/actions";
import Loading from "../Loading/Loading";

const Activities = (props) => {
  const activity = useSelector((state) => state.filter);
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);

  console.log(activity);

  useEffect(() => {
    dispatch(getAllActivity());
    setLoading(false);
    }, [dispatch]);

    if (loading) {
      return <Loading />;
      }

  function backtoHome() {
    return props.history.push("/home");
  }

  return (
    <div className={style.container}>
      <div>
        <button onClick={backtoHome}>To Home</button>
      </div>

      <div><h1>All Activities</h1></div>
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
              countries={
                Array.isArray(c.Countries)
                  ? c.Countries.map((e) => {
                      return {
                        id: e.id,
                        name: e.name,
                        flag: e.flag,
                      };
                    })
                  : []
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Activities;
