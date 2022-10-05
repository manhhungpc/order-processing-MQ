# Order Processing

## Running RabbitMQ

---

Config your volumes data at `docker-compose.yml`

## Start:

    docker-composer up -d

## Stop:

    docker-composer down

Open your browser and try RabbitMQ GUI at: `http://localhost:15672/`

## Running application

---

Go to order folder `cd order` then `npm start`

Go to payment folder `cd payment` then `npm start`

Go to shipping folder `cd shipping` then `npm start`

**Caution**: Open new terminal to start other services and keep the remains running

Interact with OpenAPI Swagger at: `http://localhost:4000/api/mq`
