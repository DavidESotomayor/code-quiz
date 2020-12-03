// getting all elements
var startButton = document.querySelector(".startButton button");
var displayBox = document.querySelector(".displayBox");
var quitButton = displayBox.querySelector(".displayBoxButtons .quit");
var continueButton = displayBox.querySelector(".displayBoxButtons .continue")


startButton.onclick = function () {
    displayBox.classList.add("activeDisplayBox");
}
    // Clicking Start button starts timer
    // A question is then prompted
    // A wrong answer subtracts time from timer
    // A right answer is logged
// When timer reaches zero
    // Game is over; submit initials and score
    // Initials and score are saved; option to play quiz again