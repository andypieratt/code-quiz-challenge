// Button Variables
var $startBtn = $("#start-btn");

// Question and Answer Variables
var questionsArr = [
  {
    question: 'What statement generates a "loop?"',
    answers: [
      { text: '"If" Statement', correct: false },
      { text: '"Return" Statement', correct: false },
      { text: '"For" Statement', correct: true },
      { text: '"Loop" Statement', correct: false },
    ],
  },
  {
    question: 'Which of the following is the "strict" equality operator?',
    answers: [
      { text: "==", correct: false },
      { text: "!=", correct: false },
      { text: "=", correct: false },
      { text: "===", correct: true },
    ],
  },
  {
    question: "In what scope do functions search for variables first?",
    answers: [
      { text: "Global Scope", correct: false },
      { text: "Local Scope", correct: true },
      { text: "Function Scope", correct: false },
    ],
  },
  {
    question: 'How do you convert a "string" to a "numeric" value?',
    answers: [
      { text: "parseInt()", correct: true },
      { text: "floatInt()", correct: false },
      { text: "getNumber()", correct: false },
      { text: "Number()", correct: false },
    ],
  },
];

var $answers = $("#answers");
var $questions = $("#questions");
var $questionContainer = $("#question-container");
var questionIndex = -1;

var secondsRemaining = 30;

// Welcome Screen Variables
var $openScreen = $("#opening-screen");

// Highscore Variables
var $scoreList = $("#high-scores");
var score = 0;

// Opening Screen Call
openingScreen();

// Welcome Screen Function
function openingScreen() {
  // Hide Questions
  $questionContainer.hide();
}

// Start Game Call
$startBtn.on("click", startGame);

// Start Game Function
function startGame() {
  console.log("Start");
  // Hide Start Button
  $startBtn.hide();
  // Hide Welcome Screen
  $openScreen.hide();
  // Show QUESTION 1
  $questionContainer.show();
  questionIndex = 0;
  showQuestion(questionIndex);
  // Being Timer Countdown
}

// // QUESTION FUNCTION
function showQuestion(questionIndex) {
  var questionObj = questionsArr[questionIndex];
  $questions.text(questionObj.question);
  var answers = questionObj.answers;
  $answers.empty();
  for (let i = 0; i < answers.length; i++) {
    var choiceBtn = document.createElement("button");
    choiceBtn.innerHTML = answers[i].text;
    choiceBtn.addEventListener("click", function () {
      if (answers[i].correct) {
        score++;
      } else {
        secondsRemaining -= 5;
      }
      incrementQuestion();
    });
    $answers.append(choiceBtn);
  }
}

function incrementQuestion() {
  questionIndex++;
  if (questionsArr.length > questionIndex) {
    showQuestion(questionIndex);
  } else {
    endGame();
  }
}

// END GAME
function endGame() {
  // Show Start Button
  $startBtn.show();
  //Alert Score
  //Capture User Initials
  var userInitials = prompt("Enter Intials to Store Highscore!");
  //Save Score and Initials to Local Storage
  var currentScores = JSON.parse(localStorage.getItem("highscore")) || [];
  var userObj = {
    userInitials,
    score,
  };

  currentScores.push(userObj);
  localStorage.setItem("highscore", JSON.stringify(currentScores));
  // Re-render High Scores
  renderScores();
}

// RENDER HIGH SCORES
function renderScores() {
  // Get Current Local Storage Data
  var currentScores = JSON.parse(localStorage.getItem("highscore")) || [];
  // Clear High Score Field
  $scoreList.empty();
  // Loop Through Array of Score Objects
  for (var i = 0; i < currentScores.length; i++) {
    var scoreObj = currentScores[i];
    var newLi = $("<li>", { class: "list-item" });
    newLi.text(scoreObj.userInitials + "---------" + scoreObj.score);

    $scoreList.append(newLi);
  }
}
