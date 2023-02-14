import style from "./inputActivities.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByActivity } from "../../redux/actions/actions";

const InputActivities = () => {
  const activity = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("Default");

  console.log(activity);
 
  function handleSelect(event) {
    const { value } = event.target;
    setSelectedValue(value);
    dispatch(filterByActivity(value));
  }

  return (
    <div className={style.container}>
      <select
        name="Select Activity"
        value={selectedValue}
        onChange={(e) => {
          handleSelect(e);
          // filterByActivity(e);
        }}
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
    </div>
  );
};

export default InputActivities;
