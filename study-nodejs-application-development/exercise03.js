const io = require("socket.io-client");
const client = io.connect("http://localhost:2025");
client.on('connect', ()=>{
    console.log("connected to the ws server.");
    client.on("trade-event", event => {
        console.log(event.toString());
    })
})
