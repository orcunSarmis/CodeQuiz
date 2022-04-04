//  These lines takes the dom elements and store the variables necessary for the app.
var timerClock = document.getElementById(".timerClock");
var startQ = document.querySelector("#startQuiz");
var showTimer = document.querySelector("#timerClock");
var index = 0; // index for store 0 for start from first question.
var secondLeft = 60; // Total quiz time is 60 seconds, stored in variable.
var timer; // This line store score inside of variable.
var showHighScore = document.querySelector("#highScore");

// This lines create question, options and correct answers array.
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
      question: "How do you create a function in JavaScript?",
      answers: {
        option1: "function = myFunction()",
        option2: "function myFunction()",
        option3: "function:myFunction()m"
      },
      correctAnswer: "function myFunction()"
    },
      {
          numb: 4,
        question: "Which tool can you use to ensure code quality?",
        answers: {
          option1: "Angular",
          option2: "jQuery",
          option3: "ESLint"
        },
        correctAnswer: "ESLint"
      },
      {
        numb: 5,
      question: "How to write an IF statement in JavaScript?",
      answers: {
        option1: "if i == 5 then",
        option2: "if(i==5)",
        option3: "if i = 5"
      },
      correctAnswer: "if(i==5)"
    },
    {
      numb: 6,
    question: "How does a WHILE loop start?",
    answers: {
      option1: "while (i <= 10; i++)",
      option2: "while (i <= 10)",
      option3: "while i = 1 to 10"
    },
    correctAnswer: "while (i <= 10; i++)"
  }
    ];

    // This lines start the timer and hide the rules and show the questions on the screen.
function start() {
  quizRules.style.display = "none";
  timer = setInterval(callBack,1000);
  showQuestion();
}

// This lines for show the timer/score. 
function callBack() {
    secondLeft--;
    showTimer.textContent = "Score: " + secondLeft;

// This lines clear the timer and end the game.
    if (secondLeft < 1) {
        clearInterval(timer);
        endGame();
    }
    console.log(secondLeft);
}

// Function for show questions.
function showQuestion() {
  var displayedQuestion = document.querySelector("#displayedQuestion");
  var option1 = document.querySelector("#option1");
  var option2 = document.querySelector("#option2");
  var option3 = document.querySelector("#option3");
  // console.log("show");

  // This lines for display questions one by one.
  displayedQuestion.textContent = myQuestions[index].question;
  option1.textContent = myQuestions[index].answers.option1;
  option2.textContent = myQuestions[index].answers.option2;
  option3.textContent = myQuestions[index].answers.option3;
  // console.log("show");

  // This conditional hides the quiz rules.
  if (!quizRules.classList.contains("hide")) {
      quizRules.classList.add("hide");
         
  }

  option1.addEventListener('click', verifyAnswer);
  option2.addEventListener('click', verifyAnswer);
  option3.addEventListener('click', verifyAnswer);
}

// This function verify answers.
function verifyAnswer(event){
  console.log({answer: event.currentTarget.textContent});
  console.log({ question: myQuestions[index]});

  // This lines checks if user inputs match with correct answer.
if (event.currentTarget.textContent === myQuestions[index].correctAnswer) {
  // console.log('it worked');
}else{
  secondLeft -= 10;
  // check wrong answers
}
index++; // Increment index.
// this lines stops the quiz after 6th question.
if (index >= myQuestions.length) {
  endGame();
}else {
// console.log(event); 
  showQuestion();
}
  //verify the answers here
  //find the id of the button clicked
}
// start();

function endGame(){
  clearInterval(timer); //stops the timer
  var highScore = prompt("What is your name?");
  // console.log(playerName);
  // console.log(secondLeft);

  var highScore = {
    name: "",
    playerScore: secondLeft
  };

  showHighScore.textContent = "High Score: " + highScore;
  //create object name and score
  //this function wil run based on multiple conditions 
}
startQ.addEventListener("click", start);



