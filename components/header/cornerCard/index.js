for (let i = 0; i < 2; i++) {
  const cornerCard = document.createElement("div");
  cornerCard.className = "corner-card";
  const cornerCardImage = document.createElement("img");
  cornerCardImage.src =
    "https://static01.nyt.com/images/2023/10/22/multimedia/00nat-woll--02-fmwq/00nat-woll--02-fmwq-mediumThreeByTwo440.jpg";
  cornerCardImage.style.height = "164px";
  cornerCardImage.style.width = "294px";
  cornerCard.appendChild(cornerCardImage);

  const cornerCardContent = document.createElement("div");
  cornerCardContent.className = "corner-card-content";

  const cornerTitle = document.createElement("h4");
  cornerTitle.textContent = "Başlık";
  cornerCardContent.appendChild(cornerTitle);

  const cornerDescription = document.createElement("p");
  cornerDescription.textContent = "AçıklamAçıklamaAçıklamaAçıklamaAçıklamaa";
  cornerCardContent.appendChild(cornerDescription);

  cornerCard.appendChild(cornerCardContent);
  containerCornerNews.appendChild(cornerCard);
}