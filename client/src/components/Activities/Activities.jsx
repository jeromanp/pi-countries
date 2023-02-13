import style from "./Activities.module.css";
import { useSelector, useDispatch } from "react-redux";
import CardActivity from "../CardActivity/CardActivity";
import { useEffect, useState } from "react";
import { getAllActivity } from "../../redux/actions/actions";
import Loading from "../Loading/Loading";
import InputActivities from "../InputActivities/InputActivities";

const Activities = (props) => {
  const activity = useSelector((state) => state.filter);
  const dispatch = useDispatch();
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

  function toActivitiesCreate() {
    return props.history.push("/activities");
  }

  return (
    <div className={style.container}>
      <div>
        <button onClick={backtoHome}>To Home</button>
        <button onClick={toActivitiesCreate}>Create New Activity</button>
      </div>

      <div className={style.h2}>
        <h2>Search Activity</h2>
      </div>

      <div className={style.card}>
        <InputActivities />
      </div>

      <div>
        <h1>All Activities</h1>
      </div>
      <div className={style.cardActivity}>
        {activity?.map((c) => {
          return (
            <CardActivity            
              key={c.id}
              id={c.id}
              name={c.name}  
              flag={c.flag}  
              difficulty={c.difficulty}    
              duration={c.duration} 
              season={c.season}   
             
            />
          );
        })}
      </div>
    </div>
  );
};

export default Activities;
