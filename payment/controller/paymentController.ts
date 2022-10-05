import { Request, Response } from "express";
import connectQueue from "../middleware/connectQueue";

export const startShippingService = async (req: Request, res: Response) => {
    const shippingQueue = await connectQueue("shipping");

    const data = req.body;
    shippingQueue?.channel.sendToQueue("shipping", Buffer.from(JSON.stringify(data)));

    console.log("Start shipping process!");
    res.status(200).send("Your order is shipping!");
};

export const processPayment = async (req: Request, res: Response) => {
    try {
        const queue = await connectQueue("orders");

        const data = req.body;

        if (!data.payment) {
            res.status(400).send("User not check out");
        }

        queue?.channel.consume("orders", (data) => {
            console.log(`Payment for order: ${data?.fields.consumerTag}`);
            if (data != null) {
                queue.channel.ack(data);
            }
        });

        console.log("Payment done!");
        res.status(200).send("Payment successfully!");
    } catch (err) {
        console.log(err);
    }
};
