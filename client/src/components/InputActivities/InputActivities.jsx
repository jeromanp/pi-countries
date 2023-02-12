import style from "./inputActivities.module.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByActivity, getAllActivity } from "../../redux/actions/actions";

const InputActivities = () => {
  const [selectedName, setSelectedName] = useState("");
  const [selectedActivity, setSelectedActivity] = useState({});
  const activity = useSelector((state) => state.filter);
    const dispatch = useDispatch()

  console.log(activity);

  useEffect(()=>{
    dispatch(getAllActivity())
  },[dispatch])

  function handleSelect(e) {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "Select Activity") {
        dispatch(filterByActivity(value));
    }
  }

  return (
    <div className={style.container}>
      <select
        name="Select Activity"
        // value={selectedName}
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
        <div>
          <p>ID: {selectedActivity.id}</p>
          <p>Name: {selectedActivity.name}</p>
          <p>Flag: {selectedActivity.flag}</p>
        </div>
      )}
    </div>
  );
};

export default InputActivities;
