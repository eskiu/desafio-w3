import { Country } from '../models/countryModel.js';
import { response } from 'express';

const fetchCountriesFromDB = async (valor) => {
  if (!valor || valor.length < 3) {
    return null;
  }

  try {
    const resultados = await Country.find({
      nombre: { $regex: new RegExp(valor, 'i') },
    }).limit(5);

    if (resultados.length === 0) {
      return null;
    }

    const sumaTotal = await Country.aggregate([
      { $group: { _id: null, totalPoblacion: { $sum: '$poblacion' } } },
    ]);

    if (!sumaTotal || sumaTotal.length === 0) {
      throw new Error('Unable to calculate total population');
    }

    const totalPoblacion = sumaTotal[0].totalPoblacion;

    let sumaPoblacion = 0;

    for (const { nombre, poblacion } of resultados) {
      sumaPoblacion += poblacion;
    }

    const resultadoFormateado = resultados.map(({ nombre, poblacion }) => ({
      nombre,
      poblacion,
      porcentaje: ((poblacion / totalPoblacion) * 100).toFixed(2),
    }));

    return resultadoFormateado;
  } catch (error) {
    console.error('Error fetching countries from database', error.message);
    throw new Error('Internal Server Error');
  }
};

const countryGet = async (req, res = response) => {
  const { valor } = req.query;

  try {
    const result = await fetchCountriesFromDB(valor);

    if (result === null) {
      return res.status(204);
    }

    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { countryGet, fetchCountriesFromDB };