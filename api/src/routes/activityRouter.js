const {Activity} = require ("../db")
const {Router} = require("express")


const activityRouter = Router()

activityRouter.post("/",(req, res)=>{
    res.send("Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body. Crea una actividad turística en la base de datos, relacionada con los países correspondientes");
})

//EXTRA

activityRouter.get("/",(req, res)=>{
    res.send("Esta ruta me traera las actividades creadas");
})

activityRouter.put("/:id", (req, res)=>{
    res.send("Modificar una actividad con el ID")
})

activityRouter.delete("/:id", (req, res)=>{
    res.send("Eliminar una actividad con el ID")
})




module.exports = activityRouter

