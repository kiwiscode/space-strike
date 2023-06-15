const raverHistory = document.querySelector(".raver");
const raverHistoryLorem = document.querySelector(".raver-history ");
const raverProto = document.querySelector(".raver-proto");
const newGameBtn = document.querySelector(".new-game");
const infoScreen = document.querySelector("#info-screen");
const gameScreen = document.querySelector("#game-screen");
const canvasContainer = document.getElementById("canvas-container");

raverHistory.addEventListener("click", function () {
  gameScreen.style.display = "none";
  infoScreen.style.display = "flex";
  raverHistoryLorem.classList.remove("display");
  raverProto.classList.remove("display");
});

newGameBtn.addEventListener("click", function () {
  gameScreen.style.display = "flex";
  infoScreen.style.display = "none";
  raverHistoryLorem.classList.remove("display");
  raverProto.classList.add("display");
  canvasContainer.style.display = "flex";
});
