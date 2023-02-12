import style from "./inputActivities.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByActivity, getAllActivity } from "../../redux/actions/actions";
import CardActivity from "../CardActivity/CardActivity";

const InputActivities = () => {
  const [selectedActivity, setSelectedActivity] = useState({});
  const [selectedValue, setSelectedValue] = useState("Default");
  const activity = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  console.log(activity);

  useEffect(() => {
    dispatch(getAllActivity());
  }, [dispatch]);

  function handleSelect(event) {
    event.preventDefault();
    const { name, value } = event.target;
    if (name === "Select Activity") {
      dispatch(filterByActivity(value));
      setSelectedActivity(activity.find((act) => act.name === value));
      setSelectedValue(value);
    }
  }

  return (
    <div className={style.container}>
      <select
        name="Select Activity"
        value={selectedValue}
        defaultValue={"Default"}
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
          countryFlag={selectedActivity.Countries}
        />
      )}
    </div>
  );
};

export default InputActivities;
