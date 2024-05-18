const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
        title: 'Blagues Carambar API',
        version: '1.0.0',
        description: 'une API pour les blagues Carambar',
        },
        servers: [
        {
            url: 'http://localhost:3000',
        },
        ],
    },
    apis: ['./routes/*.js'],
    };

const swaggerDocs = swaggerJSDoc(options);

module.exports = swaggerDocs;