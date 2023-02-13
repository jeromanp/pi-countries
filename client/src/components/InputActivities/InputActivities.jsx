import style from "./inputActivities.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  filterByActivity, getAllActivity } from "../../redux/actions/actions";
import CardActivity from "../CardActivity/CardActivity";

const InputActivities = () => {
  const [selectedActivity, setSelectedActivity] = useState({});
  const activity = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("Default");

  console.log(activity);

  useEffect(() => {
    dispatch(getAllActivity());
  }, [dispatch]);

function handleSelect(event) {
    event.preventDefault();
    const { value } = event.target;
    if (value !== "Default") {
      setSelectedActivity(activity.find((act) => act.name === value));
      console.log(setSelectedActivity(activity.find((act) => act.name === value)));
      // dispatch(filterByActivity(value))
      // setSelectedActivity(value)
      setSelectedValue(value);
    } else {
      setSelectedActivity({});
      setSelectedValue("Default");
    }
  }

// function handleSelect(event) {
//     event.preventDefault();
//     const { value } = event.target;
//     setSelectedValue(value);
//     if (value !== "Default") {
//       dispatch(filterByActivity(value));
//     }
//   }


  return (
    <div className={style.container}>
      <select
        name="Select Activity"
        value={selectedValue}
        // defaultValue={"Default"}
        onChange={handleSelect}
      >
        <option value="Default" disabled>
          Select Activity
        </option>

        {activity.map((act) => (
          <option key={act.id} value={act.name}>
            {act.name}
          </option>
        ))}
      </select>

      {selectedActivity.id && (
        <CardActivity
          id={selectedActivity.id}
          name={selectedActivity.name}
          season={selectedActivity.season}
          difficulty={selectedActivity.difficulty}
          duration={selectedActivity.duration}
          countryName={selectedActivity.Countries[0].name}

        />
      )}

    </div>
  );
};


export default InputActivities;
