var icon = document.getElementById("button"),
    animationToCheck = document.getElementById("animation-to-check"),
    animationToGreen = document.getElementById("animation-to-green"),
    animationToStar = document.getElementById("animation-to-star"),
    animationToYellow = document.getElementById("animation-to-yellow");
    button = document.getElementById("button");

button.addEventListener('click', function() {
  
  if (button.classList.contains("saved")) {
    button.classList.remove("saved");
    animationToStar.beginElement();
  } else {
    button.classList.add("saved");
    animationToCheck.beginElement();
  }
  
}, false);