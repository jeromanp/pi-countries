import style from "./Form.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions/actions";

const Form = (props) => {
  //solicitar todos los countries para el select
  const countries = useSelector((state) => state.allCountries);
  const dispatch = useDispatch();

  //obtener los datos cuando se inicie el compoennete
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  // console.log(countries);

  function backtoHome() {
    return props.history.push("/home");
  }

  function toActivities() {
    return props.history.push("/getactivities");
  }
  ////////////////FUNCION VALIDADORA /////////////////////

  function validate(inputs) {
    const errors = {};
    // const lettersOnly = /^[a-zA-Z,]+$/;
    const letterAndCo = /^[\w ]+$/;

    if (!inputs.country.length) {
      errors.country = "Se requiere al menos un country";
    } else if (!inputs.name) {
      errors.name = "Se requiere el nombre de la actividad";
    } else if (inputs.name.length <= 2 || inputs.name.length > 15) {
      errors.name = "El nombre debe tener entre 3 y 15 caracteres";
    } else if (!letterAndCo.test(inputs.name)) {
      errors.name = "El name debe tener solo letras y números";
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
  /////////////////////////////////////////////////////////////////////////

  //estado del formulario
  const [form, setForm] = useState({
    country: [],
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
  });

  // console.log(form);

  //estado de los errores del formulario
  const [error, setError] = useState({
    country: [],
    name: "",
    difficulty: "",
    duration: "",
    season: "",
  });

  // console.log(error);


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
    //valida que no haya errores
    setError(
      validate({
        ...form,
        [property]: value,
      })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    //valida que el objeto no tenga errores
    if (Object.values(error).every((value) => value === "")) {
      axios
        .post("http://localhost:3001/activities", form)
        .then((res) => {
          alert(`Se creó la actividad`);
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
        })
        .catch((error) => alert(error));
    } else {
      alert("Debes corregir/agregar los datos");
    }
  }

  //funcion para el select de countries
  function handleSelect(e) {
    setForm({
      ...form,
      country: [...form.country, e.target.value],
    });
  }

  return (
    <div className={style.container}>
      <div>
        <button onClick={backtoHome}>To Home</button>
        <button onClick={toActivities}>View Activities</button>
      </div>
      <h1>Create Activity</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <label>Countries: </label>
          <select defaultValue={"Default"} onChange={(e) => handleSelect(e)}>
            <option value="Default" disabled>
              Select Country
            </option>
            {countries.map((c) => (
              <option value={c.id} key={c.id}>
                {c.id} - {c.name}
              </option>
            ))}
          </select>
          <hr />

          <input
            type="text"
            placeholder="Country IDs"
            name="country"
            value={form.country}
            onChange={handleChange}
            // readOnly
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
          <label>Difficulty: {form.difficulty}</label>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            name="difficulty"
            value={form.difficulty}
            onChange={handleChange}
          />
          <p className={style.danger}>{error.difficulty}</p>
        </div>

        <div>
          <label>Duration: {form.duration} day(s) </label>
          <input
            type="range"
            min="1"
            max="31"
            name="duration"
            step="1"
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
