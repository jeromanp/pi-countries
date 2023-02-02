//estas funcion interactuan con el modelo de sequelize
const { Activity } = require("../db")
const {Op} = require("sequelize")

//me da una promesa y con el async-await indico que me espere a que se resuelva esa promesa
//Activity.create es una promesa


const createActivity = async (name, difficulty, duration, season) => {
    const newActivity = await Activity.create({name, difficulty, duration, season})
    return newActivity
}

const getActivity = async () => {
    //traer todas las actividades o una en especifico hallada por nombre
    const allActi = await Activity.findAll()
    return allActi
}

const findActivity = async (name) => {
    const results = await Activity.findAll({
        where:{
            name:{[Op.iLike]:`%${name}%`}
        }
    })
    return results
}


const getActivityById = async (id) => {
    const findActivity = Activity.findByPk(id)
    return findActivity
}

const updateActivity = () => {

}


const deleteActivity = () => {

}

module.exports={
    createActivity,
    getActivity,
    findActivity,
    getActivityById,
    updateActivity,
    deleteActivity,
}