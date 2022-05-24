let player = document.querySelector(".player")
document.addEventListener("keydown", function (event) {
  console.log("event= ", event);

  if (event.code === "ArrowDown") {
    let oldTop = parseInt(player.style.top);
    if (oldTop < 370) {
      player.style.top = `${oldTop + 10}px`;
    }
  }
  if (event.code === "ArrowUp") {
    let oldBottom = parseInt(player.style.top);
    if (oldBottom > 0) {
      player.style.top = `${oldBottom - 10}px`;
    }
  }

  if (event.code === "ArrowRight") {
    let oldLeft = parseInt(player.style.left);
    if (oldLeft < 370) {
      player.style.left = `${oldLeft + 10}px`;
    }
  }

  if (event.code === "ArrowLeft") {
    let oldLeft = parseInt(player.style.left);
    if (oldLeft > 0) {
      player.style.left = `${oldLeft - 10}px`;
    }
  }
});

const boxWidth = 400;
const boxHeight = 400;
var obstacol1=document.getElementById(obstacol1);
var obstacol2=document.getElementById(obstacol2);
var obstacol3=document.getElementById(obstacol3);
class checkStop{
    constructor(a,b){ 
    this.a = a;
    this.b = b;
    }
    
}
const a = obstacol1.width ;
const b = obstacol1.height;
if(positionPlayerTop == positionObstacoTop && positionPlayerLeft==positionObstacoLeft)
{alert("stop");

}


const obstaco = {
  left: Math.random() * 400,
  top: 10,
  bottom: 0,
  right: Math.random() * 400,
};
const obstacolList = [obstaco];

