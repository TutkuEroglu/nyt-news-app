for (let i = 0; i < 3; i++) {
    const mediumCard = document.createElement("div");
    mediumCard.className = "medium-card";
    const mediumCardImage = document.createElement("img");
    mediumCardImage.src =
      "https://static01.nyt.com/images/2023/10/22/multimedia/00nat-woll--02-fmwq/00nat-woll--02-fmwq-mediumThreeByTwo440.jpg";
      mediumCardImage.style.height = "166px";
      mediumCardImage.style.width = "245px";
      mediumCard.appendChild(mediumCardImage);
  
    const mediumCardContent = document.createElement("div");
    mediumCardContent.className = "medium-card-content";
  
    const mediumTitle = document.createElement("h4");
    mediumTitle.textContent = "Başlık";
    mediumCardContent.appendChild(mediumTitle);
  
    const mediumDescription = document.createElement("p");
    mediumDescription.textContent = "AçıklamAçıklamaAçıklamaAçıklamaAçıklamaa";
    mediumCardContent.appendChild(mediumDescription);
  
    mediumCard.appendChild(mediumCardContent);
    headerBottomNews.appendChild(mediumCard);
  }