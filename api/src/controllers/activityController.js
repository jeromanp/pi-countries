//estas funcion interactuan con el modelo de sequelize
const { Activity, Country } = require("../db");
const { Op } = require("sequelize");

//me da una promesa y con el async-await indico que me espere a que se resuelva esa promesa
//Activity.create es una promesa

const createActivity = async (country, name, difficulty, duration, season) => {
  const newActivity = await Activity.create({
    country,
    name,
    difficulty,
    duration,
    season,
  });
  await newActivity.addCountry(country)
  return newActivity;
};

const getActivity = async () => {
  //traer todas las actividades o una en especifico hallada por nombre
  const allActi = await Activity.findAll({
    include:{
      model:Country,
      attributes:["id","name", "flag"],
      through:{
        //eliminar tabla intermedia
        attributes:[],
      }
    }
  });
  return allActi;
};

const findActivity = async (name) => {
  const results = await Activity.findAll({
    include:{
      model:Country,
      attributes:["id","name", "flag"],
      through:{
        //eliminar tabla intermedia
        attributes:[],
      }
    },
    where: {
      name: { [Op.iLike]: `%${name}%` },
    },
  });
  // if (results.length === 0) {
  //   throw Error(`No se encuentran coincidencias con el NAME ${name}`);
  // }
  return results;
};

const getActivityById = async (id) => {  
  if(isNaN(id)){
    throw Error(`El ${id} no es un numero`)
}
  const findActivity = await Activity.findByPk(id);
  if(!findActivity){
    throw Error(`No se encontró la actividad con ID ${id}`)
  }
  return findActivity;
};



const updateActivity = async (id,country, name, difficulty, duration, season) => {
  await Activity.update(
    {
      country:country,
      name: name,
      difficulty: difficulty,
      duration: duration,
      season: season,
    },
    {
      where: {
        id: id,
      },
    }
  );
  const updatedActivity = await Activity.findByPk(id);
  return updatedActivity;
};


const deleteActivity = async (id) => {
  
  const deleteAct = await Activity.findByPk(id);
  if (!deleteAct) {
    throw new Error(`No se encontró la actividad con ID ${id}`);
  }
  await deleteAct.destroy();
  return deleteAct;
};

module.exports = {
  createActivity,
  getActivity,
  findActivity,
  getActivityById,
  updateActivity,
  deleteActivity,
};
