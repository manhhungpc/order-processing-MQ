import { Request, Response } from "express";
import connectQueue from "../middleware/connectQueue";

export const processOrder = async (req: Request, res: Response) => {
    try {
        const queue = await connectQueue("orders");

        const data = req.body;
        queue?.channel.sendToQueue("orders", Buffer.from(JSON.stringify(data)));

        console.log("Start processing order!");
        res.status(200).send("Processing your order");
    } catch (err) {
        console.log(err);
    }
};
