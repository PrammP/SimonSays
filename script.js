const start = document.getElementById("start");
var info = document.getElementById("infos");
let sequence = [];
let playerSequence = [];
let points = 0;

function startGame() {
  start.style.display = "none";
  info.style.display = "block";
  points = 0;
  info.textContent = points;
  sequence = [];
  playerSequence = [];
  nextRound();
}

function nextRound() {
  const nextColor = Math.floor(Math.random() * 9);
  sequence.push(nextColor);
  playerSequence = [];
  displaySequence();
}

function displaySequence() {
  let i = 0;
  const interval = setInterval(() => {
    if (i >= sequence.length) {
      clearInterval(interval);
      playerGuess();
      return;
    }
    activate(sequence[i]);
    i++;
  }, 600);
}

function activate(number) {
  const color = document.querySelector(`[data-color='${number}']`);
  color.classList.add("activated");
  setTimeout(() => {
    color.classList.remove("activated");
  }, 300);
}

function playerGuess() {
  const colors = document.querySelectorAll("#simon > div");

  colors.forEach((color) => {
    color.removeEventListener("click", onColorClick);
    color.addEventListener("click", onColorClick);
  });
}

function onColorClick(event) {
  const color = event.target;
  const playerGuess = parseInt(color.getAttribute("data-color"));
  playerSequence.push(playerGuess);
  activate(playerGuess);

  if (
    playerSequence[playerSequence.length - 1] !==
    sequence[playerSequence.length - 1]
  ) {
    alert("T'ES NUL");
    start.style.display = "block";
    start.style.display = "none";
    return;
  }

  if (playerSequence.length === sequence.length) {
    points++;
    info.textContent = points;
    setTimeout(nextRound, 1000);
  }
}

start.addEventListener("click", startGame);
