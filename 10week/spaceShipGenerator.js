export let activeSpace = null;

class Spaceship {
  #spaceShipElement;
  constructor(location) {
    const spaceShip = document.createElement("img");
    const randomSpace = Math.floor(Math.random() * 3) + 1;
    spaceShip.src = `./spaceShip/spaceShip${randomSpace}.png`;
    spaceShip.className = "space";
    spaceShip.style.top = "540px";
    spaceShip.style.left = "280px";
    spaceShip.style.position = "relative";

    spaceShip.addEventListener("click", () => {
      console.log("click space");
      activeSpace = this;
    });
    this.#spaceShipElement = spaceShip;
    location.appendChild(spaceShip);
  }

  moveUp() {
    const oldTop = parseInt(this.#spaceShipElement.style.top);
    this.#spaceShipElement.style.top = oldTop - 10 + "px";
  }
  moveDown() {
    const oldTop = parseInt(this.#spaceShipElement.style.top);
    this.#spaceShipElement.style.top = oldTop + 10 + "px";
  }
  moveLeft() {
    const oldLeft = parseInt(this.#spaceShipElement.style.left);
    this.#spaceShipElement.style.left = oldLeft - 10 + "px";
  }
  moveRight() {
    const oldLeft = parseInt(this.#spaceShipElement.style.left);
    this.#spaceShipElement.style.left = oldLeft + 10 + "px";
  }
}

export default Spaceship;
