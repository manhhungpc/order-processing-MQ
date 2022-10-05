import * as swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            version: "1.0.0",
            title: "API Document",
            description: "RabbitMQ demo",
            servers: [`http://localhost:4000`],
        },
        servers: [{ url: "http://localhost:4000" }],
        schemes: ["http"],
    },
    apis: ["./route/*.ts"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
export default swaggerDocs;
