import { fetchCountriesFromDB, countryGet } from '../../controller/countries.js';

describe('fetchCountriesFromDB', () => {
  test('returns null if valor is not provided or has length less than 3', async () => {
    const result = await fetchCountriesFromDB('');
    expect(result).toBeNull();
  });

  test('returns status 204 if result is null', async () => {
    // Simula el objeto de respuesta de Express
    const res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    };

    // Llama a la función countryGet con el resultado nulo y el objeto de respuesta simulado
    await countryGet({ query: { valor: '' } }, res);

    // Verifica que la función status haya sido llamada con el código 204
    expect(res.status).toHaveBeenCalledWith(204);
  });
});