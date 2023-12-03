
import { Router } from 'express';
import { countryGet } from '../controller/countries.js';

const router = Router();


router.get('/', (req, res) => {
    res.send(`OK - ${res.statusCode}`)
})
router.get('/buscar', countryGet )


export {
    router,
}