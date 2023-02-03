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
    res.status(400).json({ error: error.message });
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

const getActivityByIdHandler = async (req, res) => {
  //esta funcion traera todas las actividades creadas
  const { id } = req.params;
  try {
    const findAct = await getActivityById(id);
    res.status(201).json(findAct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateActivityHandler = async (req, res) => {
  const { id } = req.params;
  const { country, name, difficulty, duration, season } = req.body;
  try {
    const activity = await getActivityById(id);
    if (!activity) {
      return res.status(404).json({ error: "Activity not found" });
    }
    const updatedActivity = await updateActivity(
      id,
      country,
      name,
      difficulty,
      duration,
      season
    );
    res.status(201).json(updatedActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteActivityHandler = async (req, res) => {
  const { id } = req.params;
  //   if (!id) {
  //     return res.status(400).json({ error: "No se proporcionó un ID válido para la actividad a eliminar" });
  //   }

  try {
    const delAct = await deleteActivity(id);
    res.status(201).json({ Se_elimino_la_actividad: delAct });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createActivityHandler,
  getActivityHandler,
  getActivityByIdHandler,
  updateActivityHandler,
  deleteActivityHandler,
};
