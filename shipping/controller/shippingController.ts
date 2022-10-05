import { Request, Response } from "express";
import connectQueue from "../middleware/connectQueue";

export const processShipping = async (req: Request, res: Response) => {
    try {
        const queue = await connectQueue("shipping");

        queue?.channel.consume("shipping", (data) => {
            console.log(`Shipping order: ${data?.fields.consumerTag}`);
            if (data != null) {
                queue.channel.ack(data);
            }
        });

        console.log("Start shipping!");
        res.status(200).send("Shipping your order");
    } catch (err) {
        console.log(err);
    }
};
