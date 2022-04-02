var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startButton = document.querySelector(".start-button");
var h1El = document.createElement("h1");
let startBtn = document.createElement("button");
var text = document.createTextNode("Start Quiz");
let divBtn = document.createElement("divBtn");
var divTimer = document.createElement("timer");
var divClock = document.createElement("divclock");
var divQuiz = document.createElement("divQuiz");
var divResult = document.createElement("divResult");
var rules = document.querySelector(".rules");
document.getElementById("quizRules").style.display = "none";


var secondLeft = 60;
var timer;
h1El.textContent = "Code Quiz";
divClock.textContent ="Time";


var myQuestions = [
    {
        numb: 1,
        question: "Who invented JavaScript?",
        answers: {
          a: "Douglas Crockford",
          b: "Sheryl Sandberg",
          c: "Brendan Eich"
        },
        correctAnswer: "c"
      },
      {
          numb: 2,
        question: "Which one of these is a JavaScript package manager?",
        answers: {
          a: "Node.js",
          b: "TypeScript",
          c: "npm"
        },
        correctAnswer: "c"
      },
      {
          numb: 3,
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      }
    ];



document.body.appendChild(h1El);
document.body.appendChild(divBtn);
document.body.appendChild(divClock);
document.body.appendChild(divQuiz);
document.body.appendChild(divResult);
startBtn.appendChild(text);
document.body.appendChild(startBtn);
document.body.appendChild(divTimer);
document.getElementsByClassName(divBtn);



h1El.classList.add("quiz-title");
startBtn.classList.add("startBtn");
divBtn.classList.add("divBtn");
divTimer.classList.add("timerClock");
divClock.classList.add("clockCl");
divQuiz.classList.add("quizCon");

h1El.setAttribute("style", "font-size: 50px; font-wiegth: bold; display: flex; flex-wrap: wrap; justify-content: center; text-align: center;  color: red;");
startBtn.setAttribute("style", "display: flex; flex-wrap: wrap; justify-content: center;  text-align: center; font-size: 25px; font-weight: 500; background: #557A95; color: #5D5C61;");
divClock.setAttribute("style", "display: flex; flex-warp: wrap; justify-content: flex-end;");
divQuiz.setAttribute("id", "quiz");
divBtn.setAttribute("id", "div-1");
divClock.setAttribute("id", "clock");
divTimer.setAttribute("id", "divtime");

function start() {
    timer = setInterval(callBack,1000)
}

function callBack() {
    secondLeft--;
    divClock.textContent = "Time: " + secondLeft;


    if (secondLeft === 0) {
        clearInterval(timer);
    }
}

startBtn.onclick = ()=> {
    rules.classList.add("activerules"); // show rules
}

function showQuestion() {


}
// start();

document.querySelector("startBtn");
startBtn.addEventListener("click", start);

// function buildQuiz() {
// // variable to store the HTML output
//     var output = []; 
// // for each question...
//     myQuestions.forEach(
//         (currentQuestion, questionNumber) => {
// // variable to store the list of possible answers
//             var answers = [];
// // and for each available answer...
// for(letter in currentQuestion.answers){


// }

//         }
//     )
// }



// function showResult() {}


// document.body.appendChild(startBtn);
// startBtn.innerHTML = "Start";