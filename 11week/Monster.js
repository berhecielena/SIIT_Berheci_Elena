import ElementMove from "./ElementMove.js";

class Monster extends ElementMove {
  constructor(location) {
    super();
    const monsterImg = document.createElement("img");
    monsterImg.style.top = "300px";
    monsterImg.style.left = "0px";
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    monsterImg.src = `./monster/monster${randomNumber}.svg`;

    location.appendChild(monsterImg);
    monsterImg.classList.add("monster");
    this.element = monsterImg;
  }
}

export default Monster;