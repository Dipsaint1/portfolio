document.querySelector(".more-btn").addEventListener('click', showMore);
document.querySelector(".close").addEventListener('click', closeMoreBtn);


function showMore(){
  // document.querySelector(".more-about-me").style.display = "flex"; 
  // alert(5);
  // document.querySelector(".more-about-me").classList.toggle("on");
  // document.querySelector(".about-container").classList.toggle("off");
  document.querySelector(".more-about-me").style.display = "flex";
  document.querySelector(".about-container").style.display = "none";
}

function closeMoreBtn(){
  
  document.querySelector(".more-about-me").style.display = "none";
  document.querySelector(".about-container").style.display = "flex";
  // document.querySelector(".about-container").classList.toggle("on");
}
