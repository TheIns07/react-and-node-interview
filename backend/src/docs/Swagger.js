const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'Documentation for the API',
    },
    servers: [
        {
            url: 'http://localhost:3006',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./src/routes/*.js'], 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
