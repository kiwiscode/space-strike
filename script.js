const history = document.querySelector(".char-story");
const play = document.querySelector(".play");
const newGameBtn = document.querySelector(".new-game");
const infoScreen = document.querySelector("#info-screen");
const gameScreen = document.querySelector("#game-screen");
const canvasContainer = document.getElementById("canvas-container");
const guessMyNumber = document.querySelector(".guess-my-number");
const pauseBtn = document.querySelector("#pause-button");
const charStory = document.querySelector(".char-story");

charStory.addEventListener("click", () => {
  const anchorTags = document.querySelectorAll("#nav-list a");
  for (let i = 0; i < anchorTags.length; i++) {
    anchorTags[i].style.color = "black";
  }
});

history.addEventListener("click", function () {
  gameScreen.style.display = "none";
  infoScreen.style.display = "flex";
});

play.addEventListener("click", function () {
  const anchorTags = document.querySelectorAll("#nav-list a");
  for (let i = 0; i < anchorTags.length; i++) {
    anchorTags[i].style.color = "white";
  }
  gameScreen.style.display = "flex";
  infoScreen.style.display = "none";
  canvasContainer.style.display = "flex";
  pauseBtn.style.display = "flex";
});
//
history.addEventListener("click", () => {
  canvasContainer.style.display = "none";
});
