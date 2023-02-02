const {
  createActivity,
  getActivity,
  updateActivity,
  deleteActivity,
} = require("../controllers/activityController");

const createActivityHandler = async (req, res) => {
  //Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
  //Crea una actividad turística en la base de datos, relacionada con los países correspondientes
  const { name, difficulty, duration, season } = req.body;
  try {
    if(!name || !season){
        throw Error("Falta enviar datos necesarios")
    }
    const newActivity = await createActivity(name, difficulty, duration, season);
    res.status(201).json(newActivity)
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

const getActivityHandler = (req, res) => {
  //esta funcion traera todas las actividades creadas
  res.send("llamara a controller getActivity");
};

const updateActivityHandler = (req, res) => {
  //Modificara una determinada actividad pasada por ID
  res.send("llamara a controller updateActivity");
};

const deleteActivityHandler = (req, res) => {
  //Eliminar una actividad con el ID
  res.send("llamara a controller deleteActivity");
};

module.exports = {
  createActivityHandler,
  getActivityHandler,
  updateActivityHandler,
  deleteActivityHandler,
};
