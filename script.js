// Selecting Elements
var startButton = document.querySelector(".startButton button");
var displayBox = document.querySelector(".displayBox");
var quitButton = displayBox.querySelector(".displayBoxButtons .quit");
var continueButton = displayBox.querySelector(".displayBoxButtons .continue")
var quizBox = document.querySelector(".quizBox");

// Start Quiz Button Click Functionality
//displays "Display Box"
startButton.onclick = function () {
    displayBox.classList.add("activeDisplayBox");
}

// Exit Quiz Button Click Functionality
// hides "Display Box"
quitButton.onclick = function () {
    displayBox.classList.remove("activeDisplayBox");
}


// Continue Button Click Functionality
//displays "Quiz Box"
continueButton.onclick = function () {
    displayBox.classList.remove("activeDisplayBox");
    quizBox.classList.add("activeQuizBox");
}


    // Clicking Start button starts timer
    // A question is then prompted
    // A wrong answer subtracts time from timer
    // A right answer is logged
// When timer reaches zero
    // Game is over; submit initials and score
    // Initials and score are saved; option to play quiz again