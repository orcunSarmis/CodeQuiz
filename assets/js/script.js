// var startBtn = document.querySelector(".startBtn button");
var timerClock = document.getElementById(".timerClock");
// var startBtn = document.getElementsByClassName("startBtn");
// var startQ = document.getElementsByClassName(".startQ");
var startQ = document.querySelector("#startQuiz");
var showTimer = document.querySelector("#timerClock");
var index = 0;
 

// console.log(startQ);

var secondLeft = 60;
var timer;

var myQuestions = [
    {
        numb: 1,
        question: "Who invented JavaScript?",
        answers: {
          option1: "Douglas Crockford",
          option2: "Sheryl Sandberg",
          option3: "Brendan Eich"
        },
        correctAnswer: "Brendan Eich"
      },
      {
          numb: 2,
        question: "Which one of these is a JavaScript package manager?",
        answers: {
          option1: "Node.js",
          option2: "TypeScript",
          option3: "npm"
        },
        correctAnswer: "npm"
      },
      {
          numb: 3,
        question: "Which tool can you use to ensure code quality?",
        answers: {
          option1: "Angular",
          option2: "jQuery",
          option3: "ESLint"
        },
        correctAnswer: "ESLint"
      }
    ];


function start() {
  timer = setInterval(callBack,1000);
  showQuestion();
}

function callBack() {
    secondLeft--;
    showTimer.textContent = "Score: " + secondLeft;


    if (secondLeft < 1) {
        clearInterval(timer);
        endGame();
    }
    console.log(secondLeft);
}


function showQuestion() {
  index++;
  var displayedQuestion = document.querySelector("#displayedQuestion");
  var option1 = document.querySelector("#option1");
  var option2 = document.querySelector("#option2");
  var option3 = document.querySelector("#option3");
  // console.log("show");

  displayedQuestion.textContent = myQuestions[index].question;
  option1.textContent = myQuestions[index].answers;
  option2.textContent = myQuestions[index].answers;
  option3.textContent = myQuestions[index].answers;
  // console.log("show");

  if (!quizRules.classList.contains("hide")) {
      quizRules.classList.add("hide");
      
      
  }

  option1.addEventListener('click', verifyAnswer);
  option2.addEventListener('click', verifyAnswer);
  option3.addEventListener('click', verifyAnswer);
}

function verifyAnswer(){



  // index++;
  showQuestion();
  //verify the answers here
  //find the id of the button clicked
}
// start();

function endGame(){
  //this function wil run based on multiple conditions 
}


startQ.addEventListener("click", start);






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

// var h1El = document.createElement("h1");
// let startBtn = document.createElement("button");
// var text = document.createTextNode("Start Quiz");
// let divBtn = document.createElement("divBtn");
// var divTimer = document.createElement("timer");
// var divClock = document.createElement("divclock");
// var divQuiz = document.createElement("divQuiz");
// var divResult = document.createElement("divResult");
// var rules = document.querySelector(".rules");
// document.getElementById("quizRules").style.display = "none";

// h1El.textContent = "Code Quiz";
// divClock.textContent ="Time";

// document.body.appendChild(h1El);
// document.body.appendChild(divBtn);
// document.body.appendChild(divClock);
// document.body.appendChild(divQuiz);
// document.body.appendChild(divResult);
// startBtn.appendChild(text);
// document.body.appendChild(startBtn);
// document.body.appendChild(divTimer);
// document.getElementsByClassName(divBtn);



// h1El.classList.add("quiz-title");
// startBtn.classList.add("startBtn");
// divBtn.classList.add("divBtn");
// divTimer.classList.add("timerClock");
// divClock.classList.add("clockCl");
// divQuiz.classList.add("quizCon");

// h1El.setAttribute("style", "font-size: 50px; font-wiegth: bold; display: flex; flex-wrap: wrap; justify-content: center; text-align: center;  color: red;");
// startBtn.setAttribute("style", "display: flex; flex-wrap: wrap; justify-content: center;  text-align: center; font-size: 25px; font-weight: 500; background: #557A95; color: #5D5C61; padding: 15px 30px; border-radius: 5px;");
// divClock.setAttribute("style", "display: flex; flex-wrap: wrap; justify-content: flex-end;");
// divQuiz.setAttribute("id", "quiz");
// divBtn.setAttribute("id", "div-1");
// divClock.setAttribute("id", "clock");
// divTimer.setAttribute("id", "divtime");

    // if (quizRules.style.display !== "none") {
    //     quizRules.style.display = "none";
    // }else {
    //     quizRules.style.display = "block";
    // }