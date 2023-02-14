const {
  createActivity,
  getActivity,
  findActivity,
  getActivityById,
  updateActivity,
  deleteActivity,
} = require("../controllers/activityController");

const createActivityHandler = async (req, res) => {
  //Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
  //Crea una actividad turística en la base de datos, relacionada con los países correspondientes
  const { country, name, difficulty, duration, season } = req.body;
  try {
    if (!name || !season) {
      throw Error("Falta enviar datos necesarios");
    }
    const newActivity = await createActivity(
      country,
      name,
      difficulty,
      duration,
      season
    );
    res.status(201).json(newActivity);
  } catch (error) {
    // res.status(400).json({ error: "datos no oK" });
  }
};

const getActivityHandler = async (req, res) => {
  //traer la actividad por nombre o todas las actividades
  const { name } = req.query;
  let activity;
  try {
    if (name) {
      activity = await findActivity(name);
    } else {
      activity = await getActivity();
    }
    res.status(201).json(activity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



module.exports = {
  createActivityHandler,
  getActivityHandler,
 
};
