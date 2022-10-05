import * as express from "express";
import * as cors from "cors";
import * as swaggerUi from "swagger-ui-express";
import * as swaggerDocs from "./swagger";
import router from "./route/shippingService";

const app = express();
const PORT = 4002;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use("/shipping", router);
app.use("/api/mq", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
