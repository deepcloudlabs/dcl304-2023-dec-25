import fetch from "node-fetch";

const BINANCE_TICKER_PRICE_URL = "https://api.binance.com/api/v3/ticker/price";
fetch(BINANCE_TICKER_PRICE_URL)
    .then(res => res.json())
    .then(tickers => tickers.map(ticker => ticker.symbol))
    .then(symbols => symbols.forEach(console.log));
