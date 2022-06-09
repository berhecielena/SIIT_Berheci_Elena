import Player from "./Player.js";
import Monster from "./Monster.js";

const gameContainer = document.getElementById("game-container");

const player = new Player(gameContainer);
document.addEventListener("keydown", function (eventKeydown) {
  if (eventKeydown.code === "ArrowDown") {
    player.moveDown();
  }
  if (eventKeydown.code === "ArrowLeft") {
    player.moveLeft();
  }
  if (eventKeydown.code === "ArrowRight") {
    player.moveRight();
  }
  if (eventKeydown.code === "ArrowUp") {
    player.moveUp();
  }
  for (let i = 0; i < monsterList.length; i++) {
    const monsterElement = monsterList[i].element;

    const positionPlayerTop = parseInt(player.element.style.top);
    const positionPlayerLeft = parseInt(player.element.style.left);
    const positionMonsterTop = parseInt(monsterElement.style.top);
    const positionMonsterLeft = parseInt(monsterElement.style.left);

    if (
      positionMonsterTop >= positionPlayerTop &&
      positionMonsterTop <= positionPlayerTop + 10 &&
      positionMonsterLeft >= positionPlayerLeft &&
      positionMonsterLeft <= positionPlayerLeft + 10
    ) {
      alert("GAME OVER");
      gameOver = true;
      console.log("go");
    }
  }
});
// am creea monstrii
const monsterList = [];
for (let i = 0; i < 10; i++) {
  const monster = new Monster(gameContainer);
  monsterList.push(monster);
}
var gameOver = false;

setInterval(() => {
  for (let i = 0; i < monsterList.length; i++) {
    const monsterElement = monsterList[i];
    moveMonster(monsterElement);
  }
}, 150);

function moveMonster(myMonster) {
  const movement = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
  const randomIndex = Math.floor(Math.random() * movement.length);
  const randomMove = movement[randomIndex];

  if (randomMove === "ArrowDown") {
    myMonster.moveDown();
  }
  if (randomMove === "ArrowLeft") {
    myMonster.moveLeft();
  }
  if (randomMove === "ArrowRight") {
    myMonster.moveRight();
  }
  if (randomMove === "ArrowUp") {
    myMonster.moveUp();
  }
  const positionPlayerTop = parseInt(player.element.style.top);
  const positionPlayerLeft = parseInt(player.element.style.left);
  const positionMonsterTop = parseInt(myMonster.element.style.top);
  const positionMonsterLeft = parseInt(myMonster.element.style.left);

  if (
    positionMonsterTop >= positionPlayerTop &&
    positionMonsterTop <= positionPlayerTop + 30 &&
    positionMonsterLeft >= positionPlayerLeft &&
    positionMonsterLeft <= positionPlayerLeft + 30
  ) {
    //alert("GAME OVER");
    gameOver = true;
    console.log("go");
  }
}