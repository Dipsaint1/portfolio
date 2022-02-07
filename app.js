document.querySelector(".more-btn").addEventListener('click', showMoreBtn);
document.querySelector(".close").addEventListener('click', closeMoreBtn);


function showMoreBtn(){
  document.querySelector(".more-about-me").style.display = "flex";
  document.querySelector(".about-container").style.display = "none";
}

function closeMoreBtn(){
  document.querySelector(".more-about-me").style.display = "none";
  document.querySelector(".about-container").style.display = "flex";
}
