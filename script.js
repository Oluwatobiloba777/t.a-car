document.addEventListener('DOMContentLoaded', function (){

  

const words = ["Screen Installation..", "DVR/Dash Cam..", "Ambient Lights..", "Audio installation..", "All Car Kits..", "Car Tracker..",];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typewriter() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(typewriter, 150);
}

typewriter();


document.getElementById('year').textContent = new Date().getFullYear();

});