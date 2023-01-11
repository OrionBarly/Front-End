const circles = document.querySelectorAll(".circle");

circles.forEach((elem) => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  var rotate = 360 / dots;
  var points = "";
  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i};--rot: ${rotate}deg"></div>`;
  }
  elem.innerHTML = points;
  const pointsMarked = elem.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});

var sound = new Audio();
sound.src = "./Music/retro.mp3";

function login() {
  var user, password;

  user = document.getElementById("usuario").value;
  password = document.getElementById("contraseña").value;

  if (user == "prueba" && password == "1234") {
    window.location = "index.html";
  } else {
    alert("Datos Incorrectos");
  }
}

function cambiar_parrafo() {}
