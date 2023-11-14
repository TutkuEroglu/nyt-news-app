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

async function fetchNewsData() {  
  const url = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key="
  const key = "DHcYntXbf6PLNb4dHEteUtWpK6EzgdOz"
  const response = await fetch(url + key)
  const data = await response.json();
  console.log(data)
  
  const FloatingImgData = data?.results?.slice(0, 14);
  const miniCardData = data?.results?.slice(14, 17);
  const corderCardData = data?.results?.slice(17, 19);
  const mediumCardData = data?.results?.slice(19, 22);
  const bottomMiniCornerData = data?.results?.slice(22, 30);
  const otherBigNewData = data?.results?.slice(31, 32);
  const otherNewsData = data?.results?.slice(31, 35);
  flatingNews(FloatingImgData);
  miniNews(miniCardData);
  cornerNews(corderCardData);
  bottomMediumNews(mediumCardData);
  bottomMiniCornerNews(bottomMiniCornerData);
  createBigNewTable(otherBigNewData);
  createFourNewsTable(otherNewsData);
}

document.addEventListener("DOMContentLoaded", () => {
  fetchCoinPrices();
  fetchNewsData();
});
