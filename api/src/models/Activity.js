const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty:{
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        max:5,
        min:1,
      }
    },
    duration:{
      type:DataTypes.INTEGER,
      validate:{
        min:1,
      }
    },
    season:{
      type:DataTypes.ENUM("Primavera","Verano", "Otoño", "Invierno" ),
      allowNull:false,
    },    
  });
};
