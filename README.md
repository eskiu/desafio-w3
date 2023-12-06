# Desafío Técnico - w3 IT Solutions

Bienvenido a un desafío tecnico sobre una aplicación simple que proporciona información sobre los países y su población. Este proyecto consta de dos partes: la API construida con Node.js, Express, y MongoDB, y el frontend desarrollado con React y Next.js 13.

## Estructura del Proyecto

### API (api-countries)

La API proporciona información sobre países y su población. La estructura del proyecto incluye:

- **app.js:** Punto de entrada del servidor Express. Se encarga de la inicialización del servidor, la conexión a la base de datos y la ejecución de semillas de datos.
  
- **server.js:** Define la clase `Server` que configura el servidor Express, middleware, rutas y la escucha en un puerto.

- **routes/country.js:** Contiene las rutas relacionadas con la información de los países.

- **models/countryModel.js:** Define el esquema del modelo de país utilizando Mongoose.

- **migrations/001_seed_countries.js:** Script para sembrar datos de países en la base de datos.

- **database/config.js:** Configuración de la conexión a MongoDB.

- **controller/countries.js:** Controladores para manejar las solicitudes relacionadas con la información de los países.

### Frontend (front-countries)

El frontend es una aplicación construida con React y Next.js 13. Contiene una página con un campo de búsqueda que muestra información sobre los países, como su nombre, población y porcentaje de la población sobre el total de la muestra.

## Requisitos Previos

Asegúrate de tener Node.js y npm instalados en tu sistema. Puedes descargarlos desde [el sitio oficial de Node.js](https://nodejs.org/).

## Configuración Inicial

1. **Clona el repositorio:**
    ```bash
    git clone https://github.com/santtiq/desafio-w3.git
    cd desafio-w3
    ```

2. **Instala las dependencias:**
    ```bash
    cd api-countries
    npm install

    cd ../front-countries
    npm install
    ```

## Ejecución del Proyecto

1. **Inicia el Backend:**
    ```bash
    cd api-countries
    node app
    ```

    El servidor estará disponible en `http://localhost:8080` por defecto. Si deseas cambiar el puerto, crea un archivo `.env` en la carpeta `api-countries` y define la variable `PORT`.
    Tené en cuenta que si decidís cambiar el puerto en el backend, tenes que asegurarte de actualizar la solicitud de la API en el front ubicada en el archivo `front-countries/app/components/Search.jsx`. Busca la línea donde se hace la solicitud y ajusta el puerto en la URL en consecuencia.

    ```jsx
    // frontend/app/components/Search.jsx
    const res = await axios.get(`http://localhost:8080/buscar?valor=${valor}`)
    ```

2. **Inicia el Frontend:**
    ```bash
    cd front-countries
    npm run dev
    ```
   La aplicación estará disponible en `http://localhost:3000`.

## Seed de Datos

Para sembrar datos en la base de datos, utiliza el siguiente script:

  ```bash
  cd api-countries
  npm run seed-countries
  ```

Asegúrate de que la base de datos esté configurada correctamente antes de ejecutar el script. La URI de la base de datos se encuentra en `database/config.js`. Se recomienda agregar la URI en un archivo `.env` para mayor seguridad.

`Importante:` Este proyecto expone la URI de la base de datos con fines de que esto es un challenge. En un entorno de producción, es esencial proteger esta información y no exponerla públicamente.

## Ejecución de Pruebas Unitarias

El proyecto cuenta con pruebas unitarias para verificar el correcto funcionamiento de la API. Asegúrate de haber instalado Jest en la carpeta `api-countries` antes de ejecutar las pruebas.

  ```bash
  cd api-countries
  npm install --save-dev jest @babel/core @babel/preset-env @babel/preset-typescript @types/jest ts-jest
  npm test
  ```
