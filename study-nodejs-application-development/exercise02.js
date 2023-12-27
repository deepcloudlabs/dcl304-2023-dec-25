//region mongodb
const {connect, Schema, Types, model} = require("mongoose");
const db_name = "tradingdb";
const collection_name = "trades";


connect(`mongodb://localhost:27017/${db_name}`, {
    "socketTimeoutMS": 0
}).then(() => console.log("Connected to the mongodb"));

const tradeSchema = new Schema({
    "_id": Schema.Types.ObjectId,
    "symbol": {
        type: String,
        required: true
    },
    "price": {
        type: Number,
        required: true
    },
    "quantity": {
        type: Number,
        required: true
    },
    "volume": {
        type: Number,
        required: true
    },
    "timestamp": {
        type: Date,
        required: true
    },
    "sequence": {
        type: Number,
        required: true
    },
    "bid": {
        type: Number,
        required: true
    },
    "ask": {
        type: Number,
        required: true
    }
});
const Trade = model(collection_name, tradeSchema);
//endregion

//region websocket-client to binance ws service
const Websocket = require("ws");

const WSS_BINANCE_URL = "wss://stream.binance.com:9443/ws/btcusdt@trade";
const ws = new Websocket(WSS_BINANCE_URL);

ws.on("message", frame => {
    const event = JSON.parse(frame);
    const document = {};
    document._id = new Types.ObjectId();
    document.symbol = event.s;
    document.price = Number(event.p);
    document.quantity = Number(event.q);
    document.volume = document.price * document.quantity;
    document.bid = event.b;
    document.ask = event.a;
    document.sequence = event.t;
    document.timestamp = new Date(event.T);
    // send the event through ws
    sessions.forEach(session => {
       session.emit("trade-event",JSON.stringify(document));
    });
    // send the event to the kafka broker
    producer.send({
        topic: "trade-events",
        messages: [
            {"key": document.symbol, "value": JSON.stringify(document)}
        ]
    }).then(() => {
        console.log("Event has been successfully sent.")
    }).catch(err => console.error(err));
    const trade = new Trade(document);
    trade.save()
        .then((savedTrade) => {
        })
        .catch(console.error);
});
//endregion

//region REST [over http] API -- Configuration
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

const api = express();
api.use(logger("dev"));
api.use(cors({origin: "*"}));
api.use(bodyParser.json({limit: "16mb"}))
//endregion

//region REST [over http] API -- Definition
api.get("/algotrading/api/v1/trades/:symbol", (req, res) => {
    const symbol = req.params.symbol;
    const from = req.query.from;
    const to = req.query.to;
    const pageno = req.query.pageno;
    const pagesize = req.query.pagesize;
    Trade.find(
        {
            $and: [
                {symbol},
                {timestamp: {$gte: from, $lte: to}}
            ]
        },
        {},
        {limit: pagesize, skip: pageno * pagesize}
    ).then(trades => res.status(200).send({"status": "ok", trades}));
});
//endregion

//region Kafka Producer -- Configuration
const {Kafka, Partitioners} = require("kafkajs");
const kafka = new Kafka({
    clientId: "hr-backend-producer",
    brokers: ["127.0.0.1:9092"]
});
const producer = kafka.producer({
    createPartitioner: Partitioners.LegacyPartitioner
});

producer.connect()
    .then(() => console.log("Connected to the Kafka broker successfully."))
    .catch(err => console.error(err));
//endregion

//region RabbitMQ Producer -- Configuration
let amqp = require('amqplib/callback_api');
amqp.connect('amqp://guest:guest@127.0.0.1:5672', (err, connection) => {
    if (err) {
        throw err;
    }
    connection.createChannel((channel_error, channel) => {
        if (channel_error) {
            throw channel_error;
        }
        ws.on('message', (frame) => {
            const event = JSON.parse(frame);
            const document = {};
            document._id = new Types.ObjectId();
            document.symbol = event.s;
            document.price = Number(event.p);
            document.quantity = Number(event.q);
            document.volume = document.price * document.quantity;
            document.bid = event.b;
            document.ask = event.a;
            document.sequence = event.t;
            document.timestamp = new Date(event.T);
            channel.publish('tradex', '', Buffer.from(JSON.stringify(document)));
        });
    });
});
//endregion

//region socketio
const {Server} = require("socket.io");
const io = new Server(2025, {cors: {origin: "*"}});
const sessions = [];

io.on("connection", session => {
    console.log(`New websocket connection is created: ${session.id}`);
    sessions.push(session);
    io.on("disconnect", () => {
        console.log(`Websocket connection is closed: ${session.id}`);
        sessions.splice(0,
            sessions.length,
            sessions.filter(_session => _session.id !== session.id)
        );
    });
});
//endregion
const port = 2024;
api.listen(port, () => {
    console.log(`REST API is running at port ${port}`)
});