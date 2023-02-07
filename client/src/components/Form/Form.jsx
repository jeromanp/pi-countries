import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";



const Form = () => {
  const countries = useSelector((state) => state.countries);

// console.log(countries);

////////////////

function validate(inputs) {
    const errors = {};
    const lettersOnly = /^[a-zA-Z]+$/;
    const validateCountry = countries.find(c=>c.name === inputs.country)

    if (!inputs.country) {
      errors.country = "Se requiere un country";
    } else if (!lettersOnly.test(inputs.country)) {
      errors.country = "El country debe tener solo letras";
    }
    else if(!validateCountry){
     console.log(validateCountry);
      errors.country = "El name del country no es valido"
    } 
    
    else if (!inputs.name) {
      errors.name = "Se requiere un nombre de la actividad";
    } else if (!lettersOnly.test(inputs.name)) {
      errors.name = "El name debe tener solo letras";
    } else if (inputs.difficulty < 1 || inputs.difficulty > 5) {
      errors.difficulty = "La dificultad de la actividad debe estar entre 1 y 5";
    } else if (inputs.duration < 1 || inputs.duration > 31) {
      errors.difficulty =
        "La duracion de la actividad debe estar entre 1 y 31 dias";
    } else if (!inputs.season) {
      errors.season = "Se debe agregar la estacion del año";
    }
    // console.log(errors);
    return errors;
  }
///////////////

  const [form, setForm] = useState({
    country: "",
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
  });

  const [error, setError] = useState({
    country: "",
    name: "",
    difficulty: "",
    duration: "",
    season: "",
  });

  function handleChange(event) {
    const property = event.target.name;
    const value = event.target.value;
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
    console.log(Form);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:3001/activities",form)
    .then(res=>alert("Se creo la actividad: ",res))
    .catch(error=>alert(error))

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
    <>
      <h1>Estoy en Form</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <label>Country: </label>
          <input
            type="text"
            placeholder="Country for the activity"
            name="country"
            value={form.country}
            onChange={handleChange}
          />
          <p className="danger">{error.country}</p>
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
          <p className="danger">{error.name}</p>
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
          <p className="danger">{error.difficulty}</p>
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
          <p className="danger">{error.duration}</p>
        </div>

        <div>
          <label>Season: </label>
          <select name="season" value={form.season} onChange={handleChange}>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
          </select>
          <p className="danger">{error.season}</p>
        </div>

        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </>
  );
};

export default Form;
