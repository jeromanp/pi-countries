//estas funcion interactuan con el modelo de sequelize
const { Activity } = require("../db")

//me da una promesa y con el async-await indico que me espere a que se resuelva esa promesa
//Activity.create es una promesa
const createActivity = async (name, difficulty, duration, season) => {
    const newActivity = await Activity.create({name, difficulty, duration, season})
    return newActivity
}

const getActivity = () => {

}

const updateActivity = () => {

}


const deleteActivity = () => {

}

module.exports={
    createActivity,
    getActivity,
    updateActivity,
    deleteActivity,
}