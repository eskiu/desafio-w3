import { dbConnection } from '../../database/config.js'

describe('Database Connection', () => {
  test('should connect to the database', async () => {
    await expect(dbConnection()).resolves.toBeUndefined();
  }, 20000);
});