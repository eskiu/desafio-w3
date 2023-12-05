import {Country} from "../models/countryModel.js";

const countries = [
    {
        nombre: "India",
        poblacion: 1409902000,
    },
    {
        nombre: "China",
        poblacion: 1403426000,
    },
    {
        nombre: "Estados Unidos",
        poblacion: 331002651,
    },
    {
        nombre: "Indonesia",
        poblacion: 273523615,
    },
    {
        nombre: "Pakistan",
        poblacion: 220892340,
    },
    {
        nombre: "Nigeria",
        poblacion: 206139589,
    },
    {
        nombre: "Brasil",
        poblacion: 212559417,
    },
    {
        nombre: "Bangladesh",
        poblacion: 164689383,
    },
    {
        nombre: "Rusia",
        poblacion: 145934462,
    },
    {
        nombre: "Mexico",
        poblacion: 128932753,
    },
    {
        nombre: "Japon",
        poblacion: 126476461,
    },
    {
        nombre: "Filipinas",
        poblacion: 109581078,
    },
    {
        nombre: "Egipto",
        poblacion: 102334404,
    },
    {
        nombre: "Etiopia",
        poblacion: 114963588,
    },
    {
        nombre: "Vietnam",
        poblacion: 97338579,
    },
    {
        nombre: "Congo",
        poblacion: 89561403,
    },
    {
        nombre: "Iran",
        poblacion: 83992949,
    },
    {
        nombre: "Turquia",
        poblacion: 84339067,
    },
    {
        nombre: "Alemania",
        poblacion: 83783942,
    },
    {
        nombre: "Tailandia",
        poblacion: 69799978,
    },
];

const seedCountries = async () => {
    try {
        await Country.deleteMany({});
        const result = await Country.insertMany(countries);
        console.log(`Countries inserted: ${result.length}`);
    } catch (error) {
        console.error('Error seeding countries', error.message);
    }
}

export {
    seedCountries,
}