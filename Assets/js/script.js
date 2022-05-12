// Button Variables
var startBtn = $("#start-btn");
var nextBtn = $("#next-btn");
var wrongBtn = $("#wrong");
var correctBtn = $("#correct");

// Question and Choice Variables
var questionOne = $("#question-1", questionOneTest());
var questionTwo = $("#question-2", questionTwoTest());
var questionThree = $("#question-3");
var questionFour = $("#question-4");
var questionFive = $("#question-5");
var openScreen = $("#opening-screen");
var userChoice = (correctBtn, wrongBtn);

// var questionsArr = [
//     { question1: "#question1" },
//     { question2: "#question2" },
//     { question3: "#question3" },
//     { question4: "#question4" },
//     { question5: "#question5" }
// ]

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

// Start Game Call
startBtn.on('click', startGame);

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

