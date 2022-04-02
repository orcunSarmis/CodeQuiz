var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
// var startButton = document.querySelector(".start-button");
var h1El = document.createElement("h1");
// let startBtn = document.createElement("button");
let divBtn = document.createElement("divBtn");



h1El.textContent = "Code Quiz";
// startBtn.innerHTML = "Start";


document.body.appendChild(h1El);
// document.body.appendChild(startBtn);
document.body.appendChild(divBtn);


h1El.classList.add("quiz-title");
startBtn.classList.add("startBtn");
divBtn.classList.add("divBtn");

h1El.setAttribute("style", "font-size: 50px; font-wiegth: bold; display: flex; flex-wrap: wrap; justify-content: center; text-align: center;  color: red;");
startBtn.setAttribute("style", "display: flex; flex-wrap: wrap; justify-content: center; align-items: center;");
