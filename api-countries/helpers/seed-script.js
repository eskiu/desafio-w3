import 'dotenv/config';
import { dbConnection } from '../database/config.js';
import { seedCountries } from '../migrations/001_seed_countries.js';

const runSeed = async () => {
  try {
    await dbConnection();
    await seedCountries();
  } catch (error) {
    console.error('Error executing seed script', error);
  } finally {
    process.exit(0);
  }
};

runSeed();