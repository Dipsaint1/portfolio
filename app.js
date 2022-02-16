const bodywidth = document.querySelector('body').clientWidth;
// alert(bodywidth);


const carouselImages = document.querySelectorAll('.carousel-slide img');
const carouselSlide = document.querySelector('.carousel-slide');


// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;       
const imageWidth = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-imageWidth * counter) + 'px)'; // Display the first image

// EventListeners
nextBtn.addEventListener('click', () => {
  if(counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-imageWidth * counter) + 'px)'; // Update the slider
});

prevBtn.addEventListener('click', () => {
  if(counter <= 0) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-imageWidth * counter) + 'px)'; // Update the slider
});

carouselSlide.addEventListener('transitionend', () => {
  if(carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2; // Remove the duplicate
    carouselSlide.style.transform = 'translateX(' + (-imageWidth * counter) +'px)';
  }
  if(carouselImages[counter].id === 'firstClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-imageWidth * counter) +'px)';
  }
});

document.querySelector(".more-btn").addEventListener('click', showMoreBtn);
document.querySelector(".close").addEventListener('click', closeMoreBtn);


// Functions

function showMoreBtn(){
  document.querySelector(".more-about-me").style.display = "flex";
  document.querySelector(".about-container").style.display = "none";
}

function closeMoreBtn(){
  document.querySelector(".more-about-me").style.display = "none";
  document.querySelector(".about-container").style.display = "flex";
}




// function previousButton(){
//   carouselSlide.style.transition = 'transform 0.000000001s ease-in-out';
//   counter--;
//   carouselSlide.style.transform = 'translateX(' + (-imageWidth * counter) + 'px)'; // Update the slider
// }

// function nextButton(){
//   carouselSlide.style.transition = 'transform 0.000000001s ease-in-out';
//   counter++;
//   carouselSlide.style.transform = 'translateX(' + (-imageWidth * counter) + 'px)'; // Upadate the slider
// }