import 'dotenv/config'
import {Server} from './server.js'
import { dbConnection } from './database/config.js';
import { seedCountries } from './migrations/001_seed_countries.js';

const server = new Server();


(async () => {
    await dbConnection();
    await seedCountries();
    server.listen();
  })();