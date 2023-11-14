const createBigNewTable = (data) => {
  console.log(data);
  const newsTableWrapper = document.createElement("div");
  newsTableWrapper.className = "newsTableWrapper";

  const tableBigNewWrapper = document.createElement("div");
  tableBigNewWrapper.className = "tableBigNewWrapper";

  const tableBigNewImage = document.createElement("img");
  tableBigNewImage.className = "tableBigNewImage";
  tableBigNewImage.src = data[0].multimedia[0].url;
  tableBigNewImage.title = data[0].title;

  const tableBigNewInfos = document.createElement("div");
  tableBigNewInfos.className = "tableBigNewInfos";

  const tableBigNewTitle = document.createElement("h4");
  tableBigNewTitle.className = "tableBigNewTitle";
  tableBigNewTitle.textContent = data[0].title;
  tableBigNewTitle.title = data[0].title;

  const tableBigNewDetail = document.createElement("span");
  tableBigNewDetail.className = "tableBigNewDetail";
  tableBigNewDetail.textContent = data[0].abstract;
  tableBigNewDetail.title = data[0].abstract;

  const tableBigNewTag = document.createElement("span");
  tableBigNewTag.className = "tableBigNewTag";
  tableBigNewTag.textContent = `#${data[0].section}`;
  tableBigNewTag.title = `#${data[0].section}`;

  tableBigNewInfos.appendChild(tableBigNewTitle);
  tableBigNewInfos.appendChild(tableBigNewDetail);
  tableBigNewInfos.appendChild(tableBigNewTag);
  tableBigNewWrapper.appendChild(tableBigNewImage);
  tableBigNewWrapper.appendChild(tableBigNewInfos);
  newsTableWrapper.appendChild(tableBigNewWrapper);
  container.appendChild(newsTableWrapper);
};

const createFourNewsTable = (data) => {
  const tableDoubleNewsWrapper = document.createElement("div");
  tableDoubleNewsWrapper.className = "tableDoubleNewsWrapper";

  for (let i = 0; i < data.length; i++) {
    const tableNewsWrapper = document.createElement("div");
    tableNewsWrapper.className = "tableNewsWrapper";

    const tableMiniNewsImg = document.createElement("img");
    tableMiniNewsImg.className = "tableMiniNewsImg";
    tableMiniNewsImg.src = data[i].multimedia[0].url;
    tableMiniNewsImg.title = data[i].title;

    const tableMiniNewsInfos = document.createElement("div");
    tableMiniNewsInfos.className = "tableMiniNewsInfos";

    const tableMiniNewsTitle = document.createElement("span");
    tableMiniNewsTitle.className = "tableMiniNewsTitle";
    tableMiniNewsTitle.textContent = data[i].title;
    tableMiniNewsTitle.title = data[i].title;

    const tableMiniNewsTag = document.createElement("span");
    tableMiniNewsTag.className = "tableMiniNewsTag";
    tableMiniNewsTag.textContent = `#${data[i].section}`;
    tableMiniNewsTag.title = `#${data[i].section}`;

    tableMiniNewsInfos.appendChild(tableMiniNewsTitle);
    tableMiniNewsInfos.appendChild(tableMiniNewsTag);
    tableNewsWrapper.appendChild(tableMiniNewsImg);
    tableNewsWrapper.appendChild(tableMiniNewsInfos);
    tableDoubleNewsWrapper.appendChild(tableNewsWrapper);
    container.appendChild(tableDoubleNewsWrapper);
  }
};
