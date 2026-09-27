

function openArt(artName) {var i;
  var x = document.getElementsByClassName("art");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(artName).style.display = "block";  
}

  openArt('Home'); // show Home when page loads

  function magic(){
    let img = document.getElementById("myImage");
    img.src = "Images/Final_Logo1.png";
  // frame 1

  setTimeout(function () {
    img.src = "Images/Final_Logo2.png";
  }, 1000);

  // frame 2
  setTimeout(function () {
    img.src = "Images/Final_Logo3.png";
  }, 2000);

  // frame 3
  setTimeout(function () {
    img.src = "Images/Final_Logo4.png";
  }, 3000);

  // frame 4
  setTimeout(function () {
    img.src = "Images/Final_Logo5.png";
  }, 4000);
}

magic();
setInterval(magic, 5000);

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("modalCaption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".clickable-img").forEach(img => {
  img.addEventListener("click", function() {
    modal.classList.add("show");
    modalImg.src = this.src;
    
    // Check for alt text first, otherwise pull from adjacent overlay text div
    let overlay = this.nextElementSibling;
    let caption = this.alt || (overlay && overlay.classList.contains('overlay-text') ? overlay.innerText : "");
    
    captionText.innerText = caption;
  });
});

closeBtn.onclick = function() {
  modal.classList.remove("show");
}

modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    modal.classList.remove("show");
  }
});
