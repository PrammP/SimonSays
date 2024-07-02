const start = document.getElementById("start");
var info = document.getElementById("infos");

function startGame() {
  start.style.display = "none";
  info.style.display = "block";
  info.textContent = points;
}

let points = 0;

function nextStep() {
  const colors = [
    "blue",
    "red",
    "yellow",
    "lgreen",
    "grey",
    "orange",
    "green",
    "purple",
    "brown",
  ];
  const random = colors[Math.floor(Math.random() * colors.length)];

  return random;
}
