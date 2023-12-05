import express from 'express';
import cors from 'cors';
import {router} from './routes/country.js';

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT ? process.env.PORT : 8080;
        // de cambiar el puerto, recordar cambiarlo tambien en la peticion del front, ruta -> front-countries/app/components/Search.js

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();
    }

    middlewares() {

        // Read and parse body
        this.app.use( express.json() );

        // CORS
        this.app.use( cors() );

    }

    routes() {
        this.app.use( '/', router );
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`API listening at http://localhost:${this.port}`)
        })
    }      

}

export{
    Server,  
} 