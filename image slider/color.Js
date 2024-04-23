const slides = document.querySelectorAll(".slider img")
  let currentImageIndex = 0;
  let intervalId = null;

  document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if (slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 9000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    } else if(index < 0){
        slideIndex = slide.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide")
}
function previousSlide(){
    clearInterval(intervalId);
    slideIndex --;
    showSlide(slideIndex);
}

function nextSlide(){
    clearInterval(intervalId);
    slideIndex ++;
    showSlide(slideIndex);
}


/*  const imageElement = document.querySelector('.slide');
  const nextButton = document.getElementById('nextButton');

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const nextImage = images[currentImageIndex];
    imageElement.src = nextImage;
  }

  nextButton.addEventListener('click', showNextImage);

*/


/*const colors = ["red", "blue", "green", "yellow", "purple", "brown", "lemon", "black", "gold"];
        let currentIndex = 0;
        const colorDisplay = document.getElementById("colorDisplay");
        const nextButton = document.getElementById("nextButton");

        function displayColor() {
            colorDisplay.style.backgroundColor = colors[currentIndex];
        }

        function nextColor() {
            currentIndex = (currentIndex + 1) % colors.length;
            displayColor();
        }

        function prevColor() {
            currentIndex = (currentIndex - 1) % colors.length;
            displayColor();
        }

        nextButton.addEventListener("click", nextColor);
        prevButton.addEventListener("click", prevColor);

        
        displayColor(); */