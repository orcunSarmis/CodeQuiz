var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startButton = document.querySelector(".start-button");
var h1El = document.createElement("h1");
let startBtn = document.createElement("button");
var text = document.createTextNode("Start Quiz");
let divBtn = document.createElement("divBtn");
var divTimer = document.createElement("timer");
var divClock = document.createElement("divclock");

var secondLeft = 60;
var timer;
h1El.textContent = "Code Quiz";


document.body.appendChild(h1El);
document.body.appendChild(divBtn);
document.body.appendChild(divClock);
startBtn.appendChild(text);
divBtn.appendChild(startBtn);
document.body.appendChild(divTimer);
document.getElementsByClassName(divBtn);
// document.getElementsByClassName(clockTime);


h1El.classList.add("quiz-title");
startBtn.classList.add("startBtn");
divBtn.classList.add("divBtn");
divTimer.classList.add("timerClock");
divClock.classList.add("clockCl");

h1El.setAttribute("style", "font-size: 50px; font-wiegth: bold; display: flex; flex-wrap: wrap; justify-content: center; text-align: center;  color: red;");
divBtn.setAttribute("style", "display: flex; flex-wrap: wrap; justify-content: center; align-items: center;");
clockCl.setAttribute("style", "display: flex; flex-warp: wrap; justify-content: flex-end;");
divBtn.setAttribute("id", "div-1");
divClock.setAttribute("id", "clock");
divTimer.setAttribute("id", "divtime");

function start() {
    timer = setInterval(callBack,1000)
}

function callBack() {
    secondLeft--;
    divClock.textContent = secondLeft;


    if (secondLeft === 0) {
        clearInterval(timer);
    }
}
// start();

document.querySelector("startBtn");
startBtn.addEventListener("click", start);

// document.body.appendChild(startBtn);
// startBtn.innerHTML = "Start";