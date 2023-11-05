const sliderContainer = document.createElement("div");
sliderContainer.className = "slider-container";

const slider = document.createElement("div");
slider.className = "slider";

const controls = document.createElement("div");
controls.className = "controls";

const flatingNews = (data) => {
  let currentIndex = 0;
  const totalImages = data.length;

  const slides = document.createElement("div");
  slides.className = "slides";

  for (let i = 0; i < totalImages; i++) {
    const numberOfSlide = document.createElement("div");
    numberOfSlide.className = "numberOfSlide";

    const numbers = document.createElement("span");
    numbers.className = "numbers";
    numbers.textContent = i + 1;

    numberOfSlide.onclick = () => {
      currentIndex = i;
      updateCurrentSlide();
    };
    numberOfSlide.appendChild(numbers);
    controls.appendChild(numberOfSlide);
  }

  data.forEach((val) => {
    const imgContent = document.createElement("div");
    imgContent.className = "imgContent";
    const img = document.createElement("img");
    img.src = val.multimedia[0].url;
    img.title = val.title;
    slides.appendChild(imgContent);
    imgContent.appendChild(img);

    const slidesTextArea = document.createElement("div");
    slidesTextArea.className = "slidesTextArea";

    const slidesText = document.createElement("span");
    slidesText.className = "slidesText";
    slidesText.textContent = val.title;

    imgContent.appendChild(slidesTextArea);
    slidesTextArea.appendChild(slidesText);
  });

  const prevButton = document.createElement("button");
  prevButton.className = "bi bi-caret-left-fill prevButton";
  prevButton.addEventListener("click", previousSlide);

  const nextButton = document.createElement("button");
  nextButton.className = "bi bi-caret-right-fill nextButton";
  nextButton.addEventListener("click", nextSlide);

  let interval;

  window.onload = function () {
    startSlider();
  };

  function startSlider() {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % data.length;
      updateCurrentSlide();
    }, 5000);
  }

  function stopSlider() {
    clearInterval(interval);
  }

  sliderContainer.addEventListener("mouseenter", stopSlider);
  sliderContainer.addEventListener("mouseleave", startSlider);

  function previousSlide() {
    currentIndex = (currentIndex - 1 + data.length) % data.length;
    updateCurrentSlide();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % data.length;
    updateCurrentSlide();
  }

  function updateCurrentSlide() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  slider.appendChild(prevButton);
  slider.appendChild(nextButton);

  slider.appendChild(slides);
};

const coinPriceWrapper = document.createElement("div");
coinPriceWrapper.className = "coinPriceWrapper";

const createCoinElement = (filteredData) => {
  for (let i = 0; i < filteredData.length; i++) {
    const priceChange = parseFloat(filteredData[i].priceChangePercent);
    const price = parseFloat(filteredData[i].askPrice);

    const coinWrapper = document.createElement("div");
    coinWrapper.className = "coinWrapper";

    const coinNames = document.createElement("label");
    coinNames.className = "coinNames";
    coinNames.textContent = `${filteredData[i].symbol}:`;

    const coinPrices = document.createElement("label");
    if (priceChange > 0) {
      coinPrices.className = "coinPrices positive";
    } else {
      coinPrices.className = "coinPrices negative";
    }
    coinPrices.textContent = `${price.toFixed(2)}$`;

    coinWrapper.appendChild(coinNames);
    coinWrapper.appendChild(coinPrices);
    coinPriceWrapper.appendChild(coinWrapper);
  }
};

sliderContainer.appendChild(slider);
sliderContainer.appendChild(controls);
sliderContainer.appendChild(coinPriceWrapper);

headerMainNews.appendChild(sliderContainer);