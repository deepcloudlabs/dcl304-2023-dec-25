import fetch from "node-fetch";

const BINANCE_TICKER_PRICE_URL = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT";
const result = fetch(BINANCE_TICKER_PRICE_URL)
    .then(res => res.json())
    .then(ticker => { return ticker.price;})
    .then(price => 2 * price);

//console.log(await result);
result.then(console.log)
