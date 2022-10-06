import { connect } from "amqplib";

async function connectQueue(queue: string) {
    try {
        const connection = await connect("amqp://localhost");
        const channel = await connection.createChannel();

        await channel.assertExchange(queue, "topic", { durable: true });
        await channel.assertQueue(queue, { durable: true });

        return { connection, channel };
    } catch (error) {
        console.log(error);
    }
}

export default connectQueue;
