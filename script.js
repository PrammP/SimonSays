const start = document.getElementById("start");
var info = document.getElementById("infos");
let sequence = [];
let sequenceJoueur = [];
let points = 0;

function startGame() {
  start.style.display = "none";
  info.style.display = "block";
  info.textContent = points;
}

function nextStep() {
  const random = Math.floor(Math.random() * 9);

  return random;
}

function Active(number) {
  const colors = document.querySelector(`[data-color='${number}']`);
  colors.classList.add("activated");

  setTimeout(() => {
    colors.classList.remove("activated");
  }, 300);
}

sequence.push(nextStep());
console.log(sequence);

Active(nextStep());
