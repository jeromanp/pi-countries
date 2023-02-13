import style from "./Form.module.css";
import axios from "axios";
import { useState } from "react";

const Form = (props) => {
   function backtoHome() {
    return props.history.push("/home");
  }
  ////////////////

  function validate(inputs) {
    const errors = {};
    const lettersOnly = /^[a-zA-Z,]+$/;
    const letterAndCo = /^[a-zA-Z]+$/;

    if (!inputs.country.length) {
      errors.country = "Se requiere al menos un country";
    } else {
      inputs.country.forEach((country, index) => {
        if (!lettersOnly.test(country)) {
          errors[`country${index}`] = "El country debe tener solo letras";
        }
      });
    }

    if (!inputs.name) {
      errors.name = "Se requiere un nombre de la actividad";
    } else if (!letterAndCo.test(inputs.name)) {
      errors.name = "El name debe tener solo letras";
    } else if (inputs.difficulty < 1 || inputs.difficulty > 5) {
      errors.difficulty =
        "La dificultad de la actividad debe estar entre 1 y 5";
    } else if (inputs.duration < 1 || inputs.duration > 31) {
      errors.difficulty =
        "La duracion de la actividad debe estar entre 1 y 31 dias";
    } else if (!inputs.season) {
      errors.season = "Se debe agregar la estacion del año";
    }
    return errors;
  }
  ///////////////

  const [form, setForm] = useState({
    country: [],
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
  });

  const [error, setError] = useState({
    country: [],
    name: "",
    difficulty: "",
    duration: "",
    season: "",
  });

  function handleChange(event) {
    const property = event.target.name;
    let value = event.target.value;
    if (property === "country") {
      value = value.split(",");
    }
    setForm({
      ...form,
      [property]: value,
    });

    setError(
      validate({
        ...form,
        [property]: value,
      })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3001/activities", form)
      .then((res) => alert(`Se creo la actividad`))
      .catch((error) => alert(error));

    if (Object.keys(error).length === 0) {
      setForm({
        country: "",
        name: "",
        difficulty: 0,
        duration: 0,
        season: "",
      });
      setError({
        country: "",
        name: "",
        difficulty: "",
        duration: "",
        season: "",
      });
    } else {
      return alert("Debes corregir los datos");
    }
  }

  return (
    <div className={style.container}>
       <div>
        <button onClick={backtoHome}>To Home</button>
      </div>
      <h1>Create Activity</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <label>Country: </label>
          <input
            type="text"
            placeholder="Country IDs, separated by commas"
            name="country"
            value={form.country}
            onChange={handleChange}
          />
          <p className={style.danger}>{error.country}</p>
        </div>

        <div>
          <label>Name: </label>
          <input
            type="text"
            placeholder="Name of the activity"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <p className={style.danger}>{error.name}</p>
        </div>

        <div>
          <label>Difficulty: </label>
          <input
            type="number"
            placeholder="Difficulty of the activity with a value between 1 and 5"
            name="difficulty"
            value={form.difficulty}
            onChange={handleChange}
          />
          <p className={style.danger}>{error.difficulty}</p>
        </div>

        <div>
          <label>Duration: </label>
          <input
            type="number"
            name="duration"
            placeholder="Duration of the activity between 1 and 31 days"
            value={form.duration}
            onChange={handleChange}
          />
          <p className={style.danger}>{error.duration}</p>
        </div>

        <div>
          <label>Season: </label>
          <select 
            name="season" 
            // value={form.season} 
            onChange={handleChange} 
            defaultValue={"Default"}
            >
          <option value="Default" disabled>
              Select Season
            </option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
          </select>
          <p className={style.danger}>{error.season}</p>
        </div>

        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
