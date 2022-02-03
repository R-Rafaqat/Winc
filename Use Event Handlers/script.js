// Part 1. Add a click event to a button.
let button = document.getElementById("mybutton");

button.addEventListener("click", function() {alert ("button clicked")});

// Part 2. Change Background
let buttonBackGround = document.getElementById('change-bg');

const bodyBackGround = document.body;

buttonBackGround.addEventListener ("click", function() {bodyBackGround.classList.add("red-background")});

// Part 3. Change Color (toggle)
buttonBackGround.addEventListener("click", function(){bodyBackGround.classList.toggle("red-background")});