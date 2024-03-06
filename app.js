const apiKey = '14162069235c2e06e03b1612bfe6cedc'; // ここにAPIキーを入力
const symbol = 'AAPL'; // 例としてAppleの銘柄コードを使用

fetch(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const stock = data[0];
        document.getElementById('stockInfo').innerHTML = `
            <p>銘柄名: ${stock.name} (${stock.symbol})</p>
            <p>現在価格: $${stock.price}</p>
            <p>前日比: ${stock.change} (${stock.changesPercentage}%)</p>
        `;
    })
    .catch(error => console.error('エラー:', error));
