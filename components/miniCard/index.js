for (let i = 0; i < 5; i++) {
  const miniCard = document.createElement("div");
  miniCard.className = "mini-card";
  const cardImage = document.createElement("img");
  cardImage.src =
    "https://static01.nyt.com/images/2023/10/18/multimedia/18israel-hamas-iran-threats-01-fblk/18israel-hamas-iran-threats-01-fblk-mediumThreeByTwo210.jpg"; // Resmin URL'sini buraya ekleyin
  cardImage.style.height = "140px";
  cardImage.style.width = "210px";
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
  cornerNews.appendChild(miniCard);
}
