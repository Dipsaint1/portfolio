const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Buttons
const prevBtn = document.querySelector(".fa .fa-arrow-left");
const nextBtn = document.querySelector(".fa .fa-arrow-right");

// Counter 
let counter = 1; // Show the first image
const size = carouselImages[0].clientWidth;  // Get the width of the image
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; // Move 1 picture forward

// Button Listeners 
nextBtn.addEventListener('click', () => {
  if(counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = 'transform 0.00000001s ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  if(counter <= 0) return;
  carouselSlide.style.transition = 'transform 0.00000001s ease-in-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
  if(carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;  // Remove the duplicate
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if(carouselImages[counter].id === 'firstClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;  
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});