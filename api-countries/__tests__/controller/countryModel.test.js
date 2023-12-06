import { fetchCountriesFromDB } from '../../controller/countries.js'

jest.mock('../../models/countryModel.js');

describe('fetchCountriesFromDB', () => {
  test('should return null if no value is provided', async () => {
    const result = await fetchCountriesFromDB(null);
    expect(result).toBeNull();
  });

});
