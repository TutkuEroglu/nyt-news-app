async function fetchCoinPrices() {
  const url = "https://api.binance.com/api/v3/ticker/24hr";
  const response = await fetch(url);
  const data = await response.json();

  const coinList = ["BTCUSDT", "ETHUSDT", "BNBUSDT", "ADABUSD", "XRPUSDT"];
  const filteredData = data.filter((item) => coinList.includes(item.symbol));

  const modifiedData = filteredData.map((item) => {
    item.symbol = item.symbol.replace("USDT", "");
    item.symbol = item.symbol.replace("BUSD", "");
    return item;
  });

  createCoinElement(modifiedData);
  setInterval(async () => {
    const updatedResponse = await fetch(url);
    const updatedData = await updatedResponse.json();
    const elements = document.getElementsByClassName("coinPriceWrapper");
    for (let i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "";
    }
    const updatedFilteredData = updatedData.filter((item) =>
      coinList.includes(item.symbol)
    );
    const updatedModifiedData = updatedFilteredData.map((item) => {
      item.symbol = item.symbol.replace("USDT", "");
      item.symbol = item.symbol.replace("BUSD", "");
      return item;
    });
    createCoinElement(updatedModifiedData);
  }, 5000);

  return modifiedData;
}

document.addEventListener("DOMContentLoaded", () => {
  fetchCoinPrices();
});
