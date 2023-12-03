import {response} from 'express';

const paises = {
  India: 1409902000,
  China: 1403426000,
  EstadosUnidos: 331002651,
  Indonesia: 273523615,
  Pakistan: 220892340,
  Nigeria: 206139589,
  Brasil: 212559417,
  Banglades: 164689383,
  Rusia: 145934462,
  Mexico: 128932753,
  Japon: 126476461,
  Filipinas: 109581078,
  Egipto: 102334404,
  Etiopia: 114963588,
  Vietnam: 97338579,
  Congo: 89561403,
  Iran: 83992949,
  Turquia: 84339067,
  Alemania: 83783942,
  Tailandia: 69799978,
};

const countryGet = (req, res = response) => {
    
    const { valor } = req.query;

    if (!valor || valor.length < 3) {
      return res.status(204).send();
    }
  
    const resultados = Object.entries(paises)
      .filter(([nombre]) => nombre.toLowerCase().includes(valor.toLowerCase()))
      .slice(0, 5);
  
    if (resultados.length === 0) {
      return res.status(204).send();
    }
    
    let sumaPoblacion = 0;

    for (const [, poblacion] of resultados) {
      sumaPoblacion += poblacion;
    }

    const resultadoFormateado = resultados.map(([nombre, poblacion]) => ({
      nombre,
      poblacion,
      porcentaje: ((poblacion / sumaPoblacion) * 100).toFixed(2),
    }));
  
    res.json(resultadoFormateado);
}


export {    
    countryGet,
}