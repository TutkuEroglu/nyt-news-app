const newsCard = () => {
    const newsCard = document.createElement("div");
    newsCard.className = "newsCard";

    const bigNew = document.createElement("div");
    bigNew.className = "bigNew";

    const bigImg = document.createElement("img");
    bigImg.className = "bigImage";
    bigImg.src = "https://static01.nyt.com/images/2023/10/08/multimedia/08israel-gaza-hezbollah-jzlk/08israel-gaza-hezbollah-jzlk-mediumThreeByTwo440.jpg"

    const bigTextDiv = document.createElement("div");
    bigTextDiv.className = "bigTextDiv";

    const bigText = document.createElement("span");
    bigText.textContent = ""

    const miniNewContainer = document.createElement("div");
    miniNewContainer.className = "miniNewContainer";
    
    const miniNew = document.createElement("div");
    miniNew.className = "miniNew";

    const miniImg = document.createElement("img");
    miniImg.className = "miniImg";
    miniImg.src = "https://static01.nyt.com/images/2023/10/08/multimedia/08themorning-gaza-ljwt-copy/08themorning-gaza-ljwt-mediumThreeByTwo210-v2.jpg"

    const miniImgDiv = document.createElement("div");
    miniImgDiv.className = "miniImgDiv";

    const miniText = document.createElement("span");
    miniText.className = "miniText";
    miniText.textContent = ""

    const miniNew2 = document.createElement("div");
    miniNew2.className = "miniNew";

    const miniImg2 = document.createElement("img");
    miniImg2.className = "miniImg";
    miniImg2.src = "https://static01.nyt.com/images/2023/10/08/multimedia/08themorning-gaza-ljwt-copy/08themorning-gaza-ljwt-mediumThreeByTwo210-v2.jpg"

    const miniImgDiv2 = document.createElement("div");
    miniImgDiv2.className = "miniImgDiv2";
    miniImgDiv2.textContent = ""

    const miniText2 = document.createElement("span");
    miniText2.className = "miniText2";
    miniText2.textContent = ""

    document.body.appendChild(newsCard);
    newsCard.appendChild(bigNew);
    bigNew.appendChild(bigImg);
    bigNew.appendChild(bigTextDiv);
    bigTextDiv.appendChild(bigText);

    newsCard.appendChild(miniNewContainer);


    miniNewContainer.appendChild(miniNew);
    miniNew.appendChild(miniImg);
    miniNew.appendChild(miniImgDiv);
    miniImgDiv.appendChild(miniText);

    miniNewContainer.appendChild(miniNew2);
    miniNew2.appendChild(miniImg2);
    miniNew2.appendChild(miniImgDiv2);
    miniImgDiv2.appendChild(miniText2);
}