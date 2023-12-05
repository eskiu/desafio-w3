import { Country } from '../models/countryModel.js';
import { response } from 'express';

const countryGet = async (req, res = response) => {
    
    const { valor } = req.query;

    if (!valor || valor.length < 3) {
      return res.status(204).send();
    }
  
    try {
      // Consulta los países en la base de datos que coinciden con la búsqueda
      const resultados = await Country.find({
        nombre: { $regex: new RegExp(valor, 'i') },
      }).limit(5);
  
      if (resultados.length === 0) {
        return res.status(204).send();
      }
  
      // Consulta la suma total de la población de todos los países
      const sumaTotal = await Country.aggregate([
        { $group: { _id: null, totalPoblacion: { $sum: '$poblacion' } } },
      ]);
  
      if (!sumaTotal || sumaTotal.length === 0) {
        return res.status(500).send('Unable to calculate total population');
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
  
      res.json(resultadoFormateado);
    } catch (error) {
      console.error('Error fetching countries from database', error.message);
      res.status(500).send('Internal Server Error');
    }
};


export { countryGet };