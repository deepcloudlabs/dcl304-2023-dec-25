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

const port = 2024;
api.listen(port, () => {
    console.log(`REST API is running at port ${port}`)
});