import * as express from "express";
import router from "./route/orderRoute";
import * as cors from "cors";
import * as swaggerUi from "swagger-ui-express";
import * as swaggerDocs from "./swagger";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/order", router);
app.use("/api/mq", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
