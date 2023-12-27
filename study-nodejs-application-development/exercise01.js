const {EventEmitter} = require("events");
const fetch = require("node-fetch");

const eventEmitter = new EventEmitter();

eventEmitter.on("topic-a", async (data)=>{
    fetch("https://api.binance.com/api/v1/ticker/price?symbol=BTCUSDT")
        .then(res => res.json())
        .then(ticker => console.log(`[Listener #1] New event is received from topic-a: ${ticker.price}, ${JSON.stringify(data)}`) );
})

eventEmitter.on("topic-a", async (data)=>{
    fetch("https://api.binance.com/api/v1/ticker/price?symbol=BTCUSDT")
        .then(res => res.json())
        .then(ticker => console.log(`[Listener #2] New event is received from topic-a: ${ticker.price}, ${JSON.stringify(data)}`) );
})

eventEmitter.on("topic-a", async (data)=>{
    fetch("https://api.binance.com/api/v1/ticker/price?symbol=BTCUSDT")
        .then(res => res.json())
        .then(ticker => console.log(`[Listener #3] New event is received from topic-a: ${ticker.price}, ${JSON.stringify(data)}`) );
})

eventEmitter.on("topic-b", async (data)=>{
    console.log(`[Listener #1] New event is received from topic-b: ${JSON.stringify(data)}`);
})

eventEmitter.on("topic-b", async (data)=>{
    console.log(`[Listener #2] New event is received from topic-b: ${JSON.stringify(data)}`);
})

setInterval(()=>{
    console.log("Before emitting an event for topic-a");
    eventEmitter.emit('topic-a',{data: "Hello mars!"});
    console.log("After emitting an event for topic-a");
}, 7_000);

setInterval(()=>{
    console.log("Before emitting an event for topic-b");
    eventEmitter.emit('topic-b',{data: "Hello moon!"});
    console.log("After emitting an event for topic-b");
}, 5_000);

console.log("Application is just started...")