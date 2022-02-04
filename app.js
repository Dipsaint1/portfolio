document.querySelector(".more-btn").addEventListener('click', showMore);
document.querySelector(".close").addEventListener('click', closeMoreBtn);


function showMore(){
  // document.querySelector(".more-about-me").style.display = "flex"; 
  // alert(5);
  document.querySelector(".more-about-me").classList.toggle("on");
  document.querySelector(".about-container").classList.toggle("off");
}

function closeMoreBtn(){
  
  document.querySelector(".more-about-me").classList.toggle("off");
  // document.querySelector(".about-container").classList.toggle("on");
}