import { Router } from "express";
import { processPayment, startShippingService } from "../controller/paymentController";

const router = Router();

router.get("/", processPayment);

router.post("/", startShippingService);

export default router;
