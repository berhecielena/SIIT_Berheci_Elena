
var addZero=(value) => { 
  if (value < 10) {
    return "0" + value;
  }
  return value;
}

function creatTimerHtml() {
  const timerHtml = document.createElement("div");
  timerHtml.className = "timer";
  timerHtml.innerHTML = `
    <span id="hours">00</span> <span>:</span>
    <span id="minutes">00</span> <span>:</span>
    <span id="seconds">00</span> 
    `;
  return timerHtml;
}

timerHtml = creatTimerHtml();
document.body.appendChild(timerHtml);

const hoursHtml = timerHtml.querySelector("#hours");
const minutesHtml = timerHtml.querySelector("#minutes");
const secondsHtml = timerHtml.querySelector("#seconds");

function startTimer() {
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  intervalID = setInterval(function startClock() {
    seconds = seconds + 1;

    if (seconds == 60) {
      minutes = minutes + 1;
      seconds = 0;
    }
    if (minutes == 60) {
      hours = hours + 1;
      minutes = 0;
    }
    secondsHtml.innerHTML = addZero(seconds);
    minutesHtml.innerHTML = addZero(minutes);
    hoursHtml.innerHTML = addZero(hours);
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalID);
}

function saveTimer() {
  let seconds = parseInt(secondsHtml.innerText);
  let minutes = parseInt(minutesHtml.innerText);
  let hours = parseInt(hoursHtml.innerText);
  const timeHtml = document.createElement("div");
  timeHtml.className = "saved-time";
  timeHtml.innerHTML = `
    <span id="hour"> ${addZero(hours)}</span> <span>:</span>
    <span id="minute"> ${addZero(minutes)}</span> <span>:</span>
    <span id="second"> ${addZero(seconds)}</span> 
    `;
  document.body.appendChild(timeHtml);
}

function resetTimer() {
  clearInterval(intervalID);
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  secondsHtml.innerHTML = addZero(seconds);
  minutesHtml.innerHTML = addZero(minutes);
  hoursHtml.innerHTML = addZero(hours);
}
 