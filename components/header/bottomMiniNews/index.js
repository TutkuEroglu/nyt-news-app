const headerText = document.createElement("h4");
headerText.className = "bottomNewsHeaderText";
headerText.textContent = "Güncel Haberler";

bottomMiniCardHeader.appendChild(headerText);

for (let i = 0; i < 5; i++) {
  const bottomMiniNewsCard = document.createElement("div");
  bottomMiniNewsCard.className = "bottom-mini-card";
  const bottomMiniNewsCardImage = document.createElement("img");
  bottomMiniNewsCardImage.src =
    "https://static01.nyt.com/images/2023/10/22/multimedia/22ny-war-tensions--01-tfqv/22ny-war-tensions--01-tfqv-articleInline.jpg";
  bottomMiniNewsCardImage.style.height = "60px";
  bottomMiniNewsCardImage.style.width = "60px";
  
  const bottomMiniNewsCardContent = document.createElement("div");
  bottomMiniNewsCardContent.className = "bottom-mini-card-content";

  const bottomMiniNewsCardContentTitle = document.createElement("h4");
  bottomMiniNewsCardContentTitle.textContent = "BaBaşlıkBBaBaşlıkBaşlıkBaşlıkşlıkaşlıkBaşlıkşlık";
  bottomMiniNewsCardContentTitle.title = "BaBaşlıkBBaBaşlıkBaşlıkBaşlıkşlıkaşlıkBaşlıkşlık"
  bottomMiniNewsCardContent.appendChild(bottomMiniNewsCardContentTitle);

  bottomMiniNewsCard.appendChild(bottomMiniNewsCardContent);
  bottomMiniNewsCard.appendChild(bottomMiniNewsCardImage);
  bottomMiniCardWrapper.appendChild(bottomMiniNewsCard);
}
