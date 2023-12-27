class BinanceViewModel {
    constructor() {
        this.trades = ko.observableArray([]);
        this.data = {
            labels: ko.observableArray([]),
            datasets: [
                {
                    label: ["BTC-USDT"],
                    backgroundColor: "rgba(220,220,220,0.2)",
                    borderColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: ko.observableArray([])
                }
            ]
        };
        this.websocket = io("ws://localhost:2025");
        this.websocket.on('trade-event', (ticker) => {
            ticker = JSON.parse(ticker);
            this.data.datasets[0].data.push(ticker.price);
            this.data.labels.push(ticker.timestamp);
            if (this.data.datasets[0].data().length > 50) {
                let sliceIndex = this.data.datasets[0].data().length - 50;
                this.data.datasets[0].data(this.data.datasets[0].data.slice(sliceIndex));
                this.data.labels(this.data.labels.slice(sliceIndex));
            }
        });
    }
    enableTradingView() {
        new TradingView.widget({
            'container_id': 'dcl',
            'width': 800,
            'height': 600,
            'symbol': 'BINANCE:BTCUSDT',
            'interval': 'D',
            'timezone': 'Etc/UTC',
            'theme': 'Light',
            'style': '1',
            'locale': 'tr',
            'toolbar_bg': '#f1f3f6',
            'enable_publishing': false,
            'withdateranges': true,
            'hide_side_toolbar': false,
            'allow_symbol_change': true,
            'watchlist': [
                'BINANCE:BTCUSDT',
                'BINANCE:ETHBTC',
                'BINANCE:LTCBTC',
                'BINANCE:XRPBTC',
                'BINANCE:BCCBTC',
                'BINANCE:DASHBTC',
                'BINANCE:ADABTC',
                'BINANCE:NEOBTC',
                'BINANCE:EOSBTC',
                'BINANCE:LTCUSDT',
                'BINANCE:XRPUSDT',
                'BINANCE:EOSUSD',
                'BINANCE:NEOUSDT',
                'BINANCE:ADAUSDT',
                'BINANCE:XLMUSD',
                'BINANCE:XLMBTC'
            ],
            'details': true,
            'hideideas': false,
            'studies': [
                'MACD@tv-basicstudies'
            ],
            'show_popup_button': false
        });
    }
}

let binanceViewModel = new BinanceViewModel();
$(document).ready(() => {
    ko.applyBindings(binanceViewModel);
    setTimeout(()=>{
        binanceViewModel.enableTradingView();
    },1000);
});