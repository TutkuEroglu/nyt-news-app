const headerText = document.createElement("h4");
headerText.className = "bottomNewsHeaderText";
headerText.textContent = "Current News";

bottomMiniCardHeader.appendChild(headerText);


const bottomMiniCornerNews = (data) => {
  for (let i = 0; i < 5; i++) {
    const bottomMiniNewsCard = document.createElement("div");
    bottomMiniNewsCard.className = "bottom-mini-card";
    const bottomMiniNewsCardImage = document.createElement("img");
    bottomMiniNewsCardImage.src = data[i].multimedia[2].url;
    bottomMiniNewsCardImage.title = data[i].title;
    bottomMiniNewsCardImage.style.height = "60px";
    bottomMiniNewsCardImage.style.width = "60px";
    
    const bottomMiniNewsCardContent = document.createElement("div");
    bottomMiniNewsCardContent.className = "bottom-mini-card-content";
  
    const bottomMiniNewsCardContentTitle = document.createElement("h4");
    bottomMiniNewsCardContentTitle.textContent = data[i].title;
    bottomMiniNewsCardContentTitle.title = data[i].title;
    bottomMiniNewsCardContent.appendChild(bottomMiniNewsCardContentTitle);
  
    bottomMiniNewsCard.appendChild(bottomMiniNewsCardContent);
    bottomMiniNewsCard.appendChild(bottomMiniNewsCardImage);
    bottomMiniCardWrapper.appendChild(bottomMiniNewsCard);
  }
}