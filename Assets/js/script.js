// Button Variables
var startBtn = $("#start-btn");
var nextBtn = $("#next-btn");
var answerBtn = $('#answer-btns');

// Question and Answer Variables
var questionsArr = [
    {
        question: 'What statement generates a "loop?"'
    
    },
    {
        question: 'Which of the following is the "strict" equality operator?'
    },
    {
        question: 'In what scope do functions search for variables first?'
    },
    {
        question: 'How do you convert a "string" to a "numeric" value?'
    },
];

var answersArr = [{
    answers: [
        { text: '"If" Statement', correct: false },
        { text: '"Return" Statement', correct: false },
        { text: '"For" Statement', correct: true },
        { text: '"Loop" Statement', correct: false }
    ],
    answers: [
        { text: '==', correct: false },
        { text: '!=', correct: false },
        { text: '=', correct: false },
        { text: '===', correct: true }
    ],
    answers: [
        { text: 'Global Scope', correct: false },
        { text: 'Local Scope', correct: true },
        { text: 'Function Scope', correct: false }
    ],
    answers: [
        { text: 'parseInt()', correct: true },
        { text: 'floatInt()', correct: false },
        { text: 'getNumber()', correct: false },
        { text: 'Number()', correct: false }
    ]
}];

console.log(questionsArr.answers);

var questions = $("#questions");
var questionContainer = $('#question-container');
var questionIndex = -1;
var answersIndex = -1;
var answers = $('#answer-btns');

// Welcome Screen Variables
var openScreen = $("#opening-screen");

// Highscore Variables
var scoreList = $("high-scores");
var scoreIndex = 0;




// Opening Screen Call
openingScreen();

// Welcome Screen Function
function openingScreen() {
    // Hide Next Question Button
    nextBtn.hide();
    // Hide Questions
    questionContainer.hide();
}

// Start Game Call
startBtn.on('click', startGame);

// Start Game Function
function startGame() {
    console.log("Start");
    // Hide Start Button
    startBtn.hide();
    // Hide Welcome Screen
    openScreen.hide();
    // Show QUESTIONS
    questionContainer.show();
    showQuestion();
    // Show Next Button
    nextBtn.show();
    // Next Button Function
    nextBtn.on('click', showQuestion);
    // Being Timer Countdown

}


function showQuestion() {
    questionIndex++;
    questions.text(questionsArr[questionIndex].question);
    answersIndex++;
    answers.text(answersArr[answersIndex].answers);
    answers.append(answersArr.answer)

}

function questionAnswer() {
    questionIndex++;
    if (questionsArr.length > questionIndex) {
        showQuestion();
    } else {
        endGame();
    }
}



// END GAME
function endGame() {
    // Hide Next Button
    nextBtn.hide();
    // Show Start Button
    startBtn.show();
    //Alert Score
    //Capture User Initials
    //Save Score and Initials to Local Storage
    // Re-render High Scores
    renderScores();
}

// RENDER HIGH SCORES
function renderScores() {
    // Get Current Local Storage Data
    var currentScores = JSON.parse(localStorage.getItem('highscore')) || [];
    // Clear High Score Field
    scoreList.empty();
    // Loop Through Array of Score Objects
    if (scoreList.length === 0) {
        return scoreList.text('No Scores Yet!');
    }
    for (var i = 0; i < currentScores.length; i++) {
        var scoreObj = currentScores[i];
        var newLi = $('<li>', { class: 'list-item' })
            .text(scoreObj, initials + '---------' + scoreObj.score);
        scoreList.append(newLi);

    }
}

