import * as swaggerJsDoc from "swagger-jsdoc";

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.1",
        info: {
            version: "1.0.0",
            title: "API Document",
            description: "RabbitMQ demo",
            servers: [`http://localhost:4001`],
        },
        servers: [{ url: "/api/mq" }],
        schemes: ["http"],
    },
    apis: ["./route/*.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
export default swaggerDocs;
