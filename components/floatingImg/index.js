const images = [
    "https://static01.nyt.com/images/2023/10/08/multimedia/08israel-gaza-hezbollah-jzlk/08israel-gaza-hezbollah-jzlk-mediumThreeByTwo440.jpg",
    "https://static01.nyt.com/images/2023/10/08/multimedia/08themorning-gaza-ljwt-copy/08themorning-gaza-ljwt-mediumThreeByTwo210-v2.jpg",
    "https://static01.nyt.com/images/2023/10/08/multimedia/08israel-gaza-hezbollah-jzlk/08israel-gaza-hezbollah-jzlk-mediumThreeByTwo440.jpg",
    "https://static01.nyt.com/images/2023/10/08/multimedia/08themorning-gaza-ljwt-copy/08themorning-gaza-ljwt-mediumThreeByTwo210-v2.jpg",
];

let currentIndex = 0;

const sliderContainer = document.createElement("div");
sliderContainer.className = "slider-container";

const slider = document.createElement("div");
slider.className = "slider";

const slides = document.createElement("div");
slides.className = "slides";


const controls = document.createElement("div");
controls.className = "controls";

const prevButton = document.createElement("button");
prevButton.className = "bi bi-caret-left-fill prevButton";
prevButton.addEventListener("click", previousSlide);


const nextButton = document.createElement("button");
nextButton.className = "bi bi-caret-right-fill nextButton"
nextButton.addEventListener("click", nextSlide);

const currentSlideText = document.createElement("p");
currentSlideText.id = "current-slide";
currentSlideText.textContent = `Şu anki eleman: ${currentIndex + 1}`;

images.forEach((imageUrl) => {
    const imgContent = document.createElement("div");
    imgContent.className = "imgContent"
    const img = document.createElement("img");
    img.src = imageUrl;
    slides.appendChild(imgContent);
    imgContent.appendChild(img);

    const slidesTextArea = document.createElement("div");
    slidesTextArea.className = "slidesTextArea";

    const slidesText = document.createElement("span");
    slidesText.className = "slidesText";
    slidesText.textContent = "dfdfsdfdsfsdfsdfdsdfdfsdfdsfsdfsdfdsdfdfsdfdsfsdfsdfdsdfdfsdfdsfsdfsdfdsdfdfsdfdsfsdfsdfdsdfdfsdfdsfsdfsdfdsdfdf"

    imgContent.appendChild(slidesTextArea);
    slidesTextArea.appendChild(slidesText);
});

slider.appendChild(prevButton);
slider.appendChild(nextButton);

slider.appendChild(slides);

sliderContainer.appendChild(slider);
sliderContainer.appendChild(controls);
sliderContainer.appendChild(currentSlideText);

// Resimleri kaydırma işlevleri
function previousSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCurrentSlide();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCurrentSlide();
}

// Şu anki elemanı güncelleyin
function updateCurrentSlide() {
    currentSlideText.textContent = `Şu anki eleman: ${currentIndex + 1}`;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Sayfaya ekleyin
document.body.appendChild(sliderContainer);