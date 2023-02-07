const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Activity",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },            
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },      
      difficulty: {
        type: DataTypes.INTEGER,
        validate: {
          max: 5,
          min: 1,
        },
        defaultValue:1,
      },
      duration: {
        type: DataTypes.INTEGER,               
        validate: {
          min: 1,
          max:31,
        },
        defaultValue:1,
        //para agregar day a la duracion
        //altera el orden de json
        get(){
          const day = this.getDataValue("duration");
          return day ? `${day} day(s)` : null ;
        },
      },      
      season: {
        type : DataTypes.ENUM("Spring", "Summer", "Autumn", "Winter")          
      },
      
    },
    { timestamps: false }
  );
};
