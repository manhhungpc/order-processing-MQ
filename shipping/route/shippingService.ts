import { Router } from "express";
import { processShipping } from "../controller/shippingController";

const router = Router();

router.get("/", processShipping);

export default router;
