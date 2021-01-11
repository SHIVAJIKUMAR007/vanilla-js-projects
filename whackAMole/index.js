let square = document.getElementsByClassName("square");
let timeLeft = document.getElementById("timeleft");
let score = document.getElementById("yourScore");

let player = { score: 0, timeLeft: 60 };
let hitId = null;

async function timer() {
  setTimeout(() => {
    player.timeLeft--;
    timeLeft.innerText = player.timeLeft;
    window.requestAnimationFrame(timer);
  }, 1000);
}

const randSquare = () => {
  if (player.timeLeft > 0) {
    for (let i = 0; i < square.length; i++) {
      square.item(i).classList.remove("mole");
      square.item(i).addEventListener("click", () => {
        player.score = player.score;
        score.innerText = player.score;
      });
    }

    let num = Math.floor(Math.random() * 9);
    square.item(num).classList.add("mole");
    hitId = square.item(num).id;
    let mole = document.getElementsByClassName("mole");

    setTimeout(() => {
      window.requestAnimationFrame(randSquare);
    }, 1200);
  } else {
    alert(`time up your score is ${player.score}, now start again`);
    player.score = 0;
    player.timeLeft = 60;
    timeLeft.innerText = player.timeLeft;
    score.innerText = player.score;
    start();
    return false;
  }
};

function start() {
  window.requestAnimationFrame(timer);
  window.requestAnimationFrame(randSquare);
}

start();

for (let i = 0; i < square.length; i++) {
  square.item(i).addEventListener("click", () => {
    if (hitId == square.item(i).id) {
      player.score++;
      score.innerText = player.score;
    }
  });
}
