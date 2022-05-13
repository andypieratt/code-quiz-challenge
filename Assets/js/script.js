// Button Variables
var startBtn = $("#start-btn");
var nextBtn = $("#next-btn");

// Question and Answer Variables
var questionsArr = [
    {
        question: 'What statement generates a "loop?"',
        answers: [
            { text: '"If" Statement', correct: false },
            { text: '"Return" Statement', correct: false },
            { text: '"For" Statement', correct: true },
            { text: '"Loop" Statement', correct: false }
        ]
    },
    {
        question: 'Which of the following is the "strict" equality operator?',
        answers: [
            { text: '==', correct: false },
            { text: '!=', correct: false },
            { text: '=', correct: false },
            { text: '===', correct: true }
        ]
    },
    {
        question: 'In what scope do functions search for variables first?',
        answers: [
            { text: 'Global Scope', correct: false },
            { text: 'Local Scope', correct: true },
            { text: 'Function Scope', correct: false }
        ]
    },
    {
        question: 'How do you convert a "string" to a "numeric" value?',
        answers: [
            { text: 'parseInt()', correct: true },
            { text: 'floatInt()', correct: false },
            { text: 'getNumber()', correct: false },
            { text: 'Number()', correct: false }
        ]
    },
];

var answers = $('#answers');
var questions = $("#questions");
var questionContainer = $('#question-container');
var questionIndex = -1;

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
    // Show QUESTION 1
    questionContainer.show();
    showQuestion1();
    choiceBtn1.on('click', correctAnswer);
    // Show Next Button
    nextBtn.show();
    // Next Button to QUESTION 2 Function
    nextBtn.on('click', showQuestion2);
    // Next Button to QUESTION 3 Function
    nextBtn.on('click', showQuestion3);
    // Being Timer Countdown

}
console.log(questionsArr[0].answers[0]);


// QUESTION 1 FUNCTION
function showQuestion1() {
    questions.text(questionsArr[0].question);
    var choiceBtn1 = document.createElement('button');
    choiceBtn1.innerHTML = questionsArr[0].answers[0].text;
    var choiceBtn2 = document.createElement('button');
    choiceBtn2.innerHTML = questionsArr[0].answers[1].text;
    var choiceBtn3 = document.createElement('button');
    choiceBtn3.innerHTML = questionsArr[0].answers[2].text;
    var choiceBtn4 = document.createElement('button');
    choiceBtn4.innerHTML = questionsArr[0].answers[3].text;
    answers.append(choiceBtn1);
    // choiceBtn1.on('click', correctAnswer);
    answers.append(choiceBtn2);
    // choiceBtn2.on('click', correctAnswer);
    answers.append(choiceBtn3);
    // choiceBtn3.on('click', correctAnswer);
    answers.append(choiceBtn4);
    // choiceBtn4.on('click', correctAnswer);
}

// QUESTION 2 FUNCTION
function showQuestion2() {
    answers.empty();
    questions.text(questionsArr[1].question);
    var choiceBtn1 = document.createElement('button');
    choiceBtn1.innerHTML = questionsArr[1].answers[0].text;
    var choiceBtn2 = document.createElement('button');
    choiceBtn2.innerHTML = questionsArr[1].answers[1].text;
    var choiceBtn3 = document.createElement('button');
    choiceBtn3.innerHTML = questionsArr[1].answers[2].text;
    var choiceBtn4 = document.createElement('button');
    choiceBtn4.innerHTML = questionsArr[1].answers[3].text;
    answers.append(choiceBtn1);
    answers.append(choiceBtn2);
    answers.append(choiceBtn3);
    answers.append(choiceBtn4);
    correctAnswer();
}

// QUESTION 3 FUNCTION
function showQuestion3() {
    answers.empty();
    questions.text(questionsArr[2].question);
    var choiceBtn1 = document.createElement('button');
    choiceBtn1.innerHTML = questionsArr[2].answers[0].text;
    var choiceBtn2 = document.createElement('button');
    choiceBtn2.innerHTML = questionsArr[2].answers[1].text;
    var choiceBtn3 = document.createElement('button');
    choiceBtn3.innerHTML = questionsArr[2].answers[2].text;
    answers.append(choiceBtn1);
    answers.append(choiceBtn2);
    answers.append(choiceBtn3);
    correctAnswer();
}

function correctAnswer() {
    if (answers === true) {
        scoreIndex++;
    } else if (answers === false) {
        timeIndex - 5;
    }
    
}




// function questionAnswer() {
//     questionIndex++;
//     if (questionsArr.length > questionIndex) {
//         showQuestion();
//     } else {
//         endGame();
//     }
// }



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

