for (let i = 0; i < 3; i++) {
  const miniCard = document.createElement("div");
  miniCard.className = "mini-card";
  const cardImage = document.createElement("img");
  cardImage.src =
    "https://static01.nyt.com/images/2023/10/22/multimedia/22ny-war-tensions--01-tfqv/22ny-war-tensions--01-tfqv-articleInline.jpg";
  cardImage.style.height = "100px";
  cardImage.style.width = "160px";
  miniCard.appendChild(cardImage);

  const cardContent = document.createElement("div");
  cardContent.className = "mini-card-content";

  const title = document.createElement("h4");
  title.textContent = "Başlık";
  cardContent.appendChild(title);

  const description = document.createElement("p");
  description.textContent = "AçıklamAçıklamaAçıklamaAçıklamaAçıklamaa";
  cardContent.appendChild(description);

  miniCard.appendChild(cardContent);
  headerCornerNews.appendChild(miniCard);
}