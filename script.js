document.addEventListener('DOMContentLoaded', function (){

  

const words = ["Car Screen Installation... ", "Car DVR/Dash Cam... ", "Car Ambient Lights... ", "Car Audio installations... ", "All Car Kits... ", "Car Tracker... ", "Home CCTV Installation... "];
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

});