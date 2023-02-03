const {
  getAllCountries,
  findCountryByName,
  getCountryById,
} = require("../controllers/countriesController");

//para la siguiente funcion puedo emplearla para traer todas las countries y para buscarlas por el name, usando un condicional que pregunte si se tiene el params

const getAllCountriesHandler = async (req, res) => {
  //esta funcion debera traer todos los paises desde la api-rest
  //guardar los datos en la BDD para utilizarlos desde ahi
  const { name } = req.query;
  let country;
  try {
    if (name) {
      country = await findCountryByName(name);
    } else {
      country = await getAllCountries();
    }
    res.status(200).json(country);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCountryByIdHandler = async (req, res) => {
  //esta funcion debera obtener el detalle de un país en particular
  //Debe traer solo los datos pedidos en la ruta de detalle de país.
  //Incluir los datos de las actividades turísticas correspondientes
  const { id } = req.params;
  try {
    const findFromById = await getCountryById(id);
    res.status(201).json(findFromById);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//EXTRA - Contemplar agregar la ruta

//const createFrom = (res, res) => {}

//const deleteFrom = (res, res) => {}

module.exports = {
  getAllCountriesHandler,
  getCountryByIdHandler,
  //filterFroms,
};
