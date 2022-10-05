import { Router } from "express";
import { processOrder } from "../controller/orderController";

const router = Router();

/**
 * @swagger
 * /order:
 *   post:
 *      name: Processing order service
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: Processing order service
 *      description: Processing order service
 *      tags:
 *        - Order
 *      requestBody:
 *         content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                     rating:
 *                        type: string
 *                        description: Rating's object id
 *                        required: true
 *                     reason:
 *                        type: string
 *                        description: Report's reason
 *                     description:
 *                        type: string
 *                        description: Report's description
 *      responses:
 *          '200':
 *              description: Get page information by path success
 */
router.post("/", processOrder);

export default router;
