// Button Variables
var startBtn = $("#start-btn");
var nextBtn = $("#next-btn");
var wrongBtn = $("#wrong");
var correctBtn = $("#correct");

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
        question: 'In what scopre do functions search for variables first?',
        answers: [
            { text: 'Global Scope', correct: false },
            { text: 'Local Scope', correct: true },
            { text: 'Function Scope', correct: false }
        ]
    },
    {
        question: 'How do you converr a "string" to a "numeric" value?',
        answers: [
            { text: 'parseInt()', correct: true },
            { text: 'floatInt()', correct: false },
            { text: 'getNumber()', correct: false },
            { text: 'Number()', correct: false }
        ]
    },
];

var openScreen = $("#opening-screen");
var userChoice = (correctBtn, wrongBtn);


// Timer and Current Index #
var timer = 30;
var currentIndex = 0;

// Highscore Variables
var scoreList = $("high-scores");


// Welcome Screen Function
function openingScreen() {
    // Hide Questions 
    questionOne.hide();
    questionTwo.hide();
    questionThree.hide();
    questionFour.hide();
    questionFive.hide();
    // Hide Next Question Button
    nextBtn.hide();
    // Show Opening Screen
    openScreen.show();
}

// Opening Screen Call
openingScreen();


// Start Game Call
startBtn.on('click', startGame);

// Start Game Function
function startGame() {
    // Hide Start Button
    startBtn.hide();
    // Hide Welcome Screen
    openScreen.hide();
    // Show Question One
    questionOne.show();
    // Show Next Button
    nextBtn.show();
    // Being Timer Countdown
}

// Question One Function
function questionOneTest() {
    var correct = correctBtn;
    var wrong = wrongBtn;
    if (userChoice == correct) {
        alert('button clicked');
        questionTwo.show();
    } else if (userChoice == wrong) {
        alert(Incorrect);
        questionTwo.show();  
    }
} 




// Question Two Function
function questionTwoTest() {
    var correct = correctBtn.on('click',nextQuestion());
    var wrong = wrongBtn.on('click', nextQuestion());
    if (userChoice === correct) {
        questionThree.show();
        nextBtn.on('click', questionTwo);
    } else if (userChoice === wrong) {
        alert(Incorrect);
        questionThree.show();  
    }
}

function nextQuestion() {
    var correct = correctBtn.o;
    var wrong = wrongBtn;
    if (correctBtn === correct) {
        currentIndex++;
    } else if (wrong === wrongBtn) {
        currentIndex++;
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

// correctBtn.on('click', function () {
//     currentIndex++;
//     if (currentIndex === questionsArr.length) {
        
//     }
// });

