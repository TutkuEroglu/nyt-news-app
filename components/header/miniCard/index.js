const miniNews = (data) => {
  for (let i = 0; i < data.length; i++) {
    const miniCard = document.createElement("div");
    miniCard.className = "mini-card";
    const cardImage = document.createElement("img");
    cardImage.src = data[i].multimedia[1].url;
    cardImage.title = data[i].multimedia[1].caption;
    cardImage.style.height = "100px";
    cardImage.style.width = "160px";
    miniCard.appendChild(cardImage);
  
    const cardContent = document.createElement("div");
    cardContent.className = "mini-card-content";
  
    const title = document.createElement("h4");
    title.textContent = data[i].multimedia[1].caption;
    title.title = data[i].multimedia[1].caption;
    cardContent.appendChild(title);
  
    const description = document.createElement("p");
    description.textContent = data[i].title;
    description.title = data[i].title;
    cardContent.appendChild(description);
  
    miniCard.appendChild(cardContent);
    headerCornerNews.appendChild(miniCard);
  }
}
