const cornerNews = (data) => {
  for (let i = 0; i < data.length; i++) {
    const cornerCard = document.createElement("div");
    cornerCard.className = "corner-card";
    const cornerCardImage = document.createElement("img");
    cornerCardImage.src = data[i].multimedia[1].url
    cornerCardImage.title = data[i].title;
    cornerCardImage.style.height = "164px";
    cornerCardImage.style.width = "294px";
    cornerCard.appendChild(cornerCardImage);
  
    const cornerCardContent = document.createElement("div");
    cornerCardContent.className = "corner-card-content";
  
    const cornerTitle = document.createElement("h4");
    cornerTitle.textContent = data[i].title;
    cornerTitle.title = data[i].title;
    cornerCardContent.appendChild(cornerTitle);
  
    const cornerDescription = document.createElement("p");
    cornerDescription.textContent = data[i].multimedia[1].caption;
    cornerDescription.title = data[i].multimedia[1].caption;
    cornerCardContent.appendChild(cornerDescription);
  
    cornerCard.appendChild(cornerCardContent);
    containerCornerNews.appendChild(cornerCard);
  }
}
