// BUTTON VARIABLES
var $startBtn = $("#start-btn");

// QUESTION AND ANSWER VARIABLES
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

// TIMER VARIABLES
var secondsRemaining = 10;
var $timerText = $("#game-timer");

// WELCOME SCREEN VARIABLES
var $openScreen = $("#opening-screen");

// HIGHSCORE VARIABLES
var $scoreList = $("#high-scores");
var score = 0;

// WELCOME SCREEN CALL
openingScreen();

// WELCOME SCREEN FUNCTION
function openingScreen() {
  // HIDE QUESTIONS
  $questionContainer.hide();
}

// START GAME CALL
$startBtn.on("click", startGame);

// START GAME FUNCTION
function startGame() {
  // HIDE START BUTTON
  $startBtn.hide();
  // HIDE WELCOME SCREEN
  $openScreen.hide();
  // SHOW QUESTION
  $questionContainer.show();
  questionIndex = 0;
  showQuestion(questionIndex);
  // SETTING AND BEGINNING TIMER COUNT-DOWN
  secondsRemaining = 10;
  score = 0;

  var gameTimer = setInterval(() => {
    secondsRemaining--;
    $timerText.text("Time Remaining: " + secondsRemaining);

    if (secondsRemaining === 0) {
      clearInterval(gameTimer);
      endGame();
    }
  }, 1000);
}

// QUESTION FUNCTION
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

// INCREMENT QUESTION FUNCTION
function incrementQuestion() {
  questionIndex++;
  if (questionsArr.length > questionIndex) {
    showQuestion(questionIndex);
  } else {
    endGame();
  }
}

// END GAME FUNCTION
function endGame() {
  // HIDE QUESTIONS
  $questionContainer.hide();
  // ALERT USER OF THEIR SCORE
  alert("Your score is " + score);
  // CAPTURE USER INITIALS
  var userInitials = prompt("Enter Intials to Store Highscore!");
  // SAVE SCORE AND INITIALS TO LOCAL STORAGE
  var currentScores = JSON.parse(localStorage.getItem("highscore")) || [];
  var userObj = {
    userInitials,
    score,
  };

  currentScores.push(userObj);
  localStorage.setItem("highscore", JSON.stringify(currentScores));
  // RE-RENDER HIGHSCORES
  renderScores();
}

// RENDER HIGH SCORES FUNCTION
function renderScores() {
  // GET CURRENT LOCAL STORAGE DATA
  var currentScores = JSON.parse(localStorage.getItem("highscore")) || [];
  // CLEAR HIGHSCORE FIELD
  $scoreList.empty();
  // LOOP THROUGH SCORE OBJECTS
  for (var i = 0; i < currentScores.length; i++) {
    var scoreObj = currentScores[i];
    var newLi = $("<li>", { class: "list-item" });
    newLi.text(scoreObj.userInitials + "---------" + scoreObj.score);
    // APPEND SCORES TO DOCUMENT
    $scoreList.append(newLi);
  }
}
