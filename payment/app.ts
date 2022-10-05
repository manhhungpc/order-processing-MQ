import * as express from "express";
import router from "./route/paymentService";
import * as cors from "cors";
import * as swaggerUi from "swagger-ui-express";
import * as swaggerDocs from "./swagger";

const app = express();
const PORT = 4001;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/payment", router);
app.use("/api/mq", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
