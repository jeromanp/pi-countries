const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.STRING(3),
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flag: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subregion: {
        type: DataTypes.STRING,
      },
      area: {
        type: DataTypes.INTEGER,
        // get(){
        //   const km = this.getDataValue("area");
        //   return km ? `${km} km2` : null ;
        // },
      },
      population: {
        type: DataTypes.INTEGER,
        // get(){
        //   const hab = this.getDataValue("population");
        //   return hab ? `${hab} approximate population` : null ;
        // },
      },
    },
    { timestamps: false }
  );
};


/*
CONSOLA POSTGRES
\c countries

select * from "Countries";
ALTER TABLE "Countries" ALTER COLUMN nombre_columna TYPE varchar(255) USING name::varchar(255);

columnas = {name,continet, capital, subregion}

select * from "Countries";
*/
