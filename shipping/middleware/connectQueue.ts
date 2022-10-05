import { connect } from "amqplib";

async function connectQueue(queue: string) {
    try {
        const connection = await connect("amqp://localhost");
        const channel = await connection.createChannel();

        // connect to 'test-queue', create one if doesnot exist already
        await channel.assertQueue(queue, { durable: true });

        return { connection, channel };
    } catch (error) {
        console.log(error);
    }
}

export default connectQueue;
