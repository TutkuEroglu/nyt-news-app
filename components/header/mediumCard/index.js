const bottomMediumNews = (data) => {
  for (let i = 0; i < data.length; i++) {
    console.log(data)
    const mediumCard = document.createElement("div");
    mediumCard.className = "medium-card";
    const mediumCardImage = document.createElement("img");
    mediumCardImage.src = data[i].multimedia[1].url;
    mediumCardImage.title = data[i].title;
      mediumCardImage.style.height = "166px";
      mediumCardImage.style.width = "245px";
      mediumCard.appendChild(mediumCardImage);
  
    const mediumCardContent = document.createElement("div");
    mediumCardContent.className = "medium-card-content";
  
    const mediumTitle = document.createElement("h4");
    mediumTitle.textContent = data[i].title;
    mediumTitle.title = data[i].title;
    mediumCardContent.appendChild(mediumTitle);
  
    const mediumDescription = document.createElement("p");
    mediumDescription.textContent = data[i].multimedia[1].caption;
    mediumDescription.title = data[i].multimedia[1].caption;
    mediumCardContent.appendChild(mediumDescription);
  
    mediumCard.appendChild(mediumCardContent);
    headerBottomNews.appendChild(mediumCard);
  }
}
