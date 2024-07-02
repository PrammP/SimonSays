let sequence = [];
let PlayerSequence = [];

const start = document.getElementById("start");
var info = document.getElementById("infos");

function startGame() {
  start.style.display = "none";
  info.style.display = "block";
  info.textContent = "Attendez la séquence...";
}
