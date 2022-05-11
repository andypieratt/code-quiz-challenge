var startBtn = $("#start-button");
var nextBtn = $("#next-btn");
var questionOne = $("#question-1", questionOneBegin());
var questionTwo = $("#question-2");
var questionThree = $("#question-3");
var questionFour = $("#question-4");
var questionFive = $("#question-5");
var openScreen = $("#opening-screen");
var userChoice = [];

// Timer and Current Index #
var timer = 30;
var currentIndex = 0;


// Welcom Screen Function
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

openingScreen();

// Start Game Function
function startGame() {
    // Hide Start Button
    startBtn.hide();
    // Hide Welcome Screen
    openScreen.hide();
    // Show Question One
    questionOne.show();
    // Being Timer Countdown
}

startBtn.on('click', startGame);


// Question One Function
function questionOneBegin() {
    var correct = $("#correct1");
    var wrong = $("#wrong1");
    // Show Next Button
    nextBtn.show();
    if (userChoice === correct) {
        questionTwo.show();
    } else if (userChoice === wrong) {
        alert(Incorrect);
        questionTwo.show();  
    }
} 