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


    // Questions and Answers
    var questions = [
        {
            numberQuestion: 1,
            question: "Inside which HTML element do we put the Javascript?",
            answer1: "<script>",
            answer2: "<javascript>",
            answer3: "<scripting>",
            answer4: "<js>",
            correctAnswer: "<script>"
        },
        {
            numberQuestion: 2,
            question: "What is the correct syntax for referring to an external script called xxx.js?",
            answer1: "<script src='xxx.js'>",
            answer2: "<script href='xxx.js'>",
            answer3: "<script name='xxx.js'>",
            answer4: "<script img='xxx.js'>",
            correctAnswer: "<script src='xxx.js'>"
        },
        {
            numberQuestion: 3,
            question: "How do you write 'Hello World' in an alert box?",
            answer1: "alertBox('Hello World');",
            answer2: "alert('Hello World');",
            answer3: "msg('Hello World');",
            answer4: "msgBox('Hello World');",
            correctAnswer: "alert('Hello World');"
        },
        {
            numberQuestion: 4,
            question: "How do you call a function named 'myFunction'?",
            answer1: "call function myFunction()",
            answer2: "call myFunction()",
            answer3: "myFunction()",
            answer4: "console.log(myFunction())",
            correctAnswer: "myFunction()"
        },
        {
            numberQuestion: 5,
            question: "What is the correct syntax for writing an 'IF' statement?",
            answer1: "if i == 5 then",
            answer2: "if i == 5",
            answer3: "if i = 5 then",
            answer4: "if (i == 5)",
            correctAnswer: "if (i == 5)"
        },
        {
            numberQuestion: 6,
            question: "How can you add a comment in Javascript?",
            answer1: "'This is a comment'",
            answer2: "//This is a comment",
            answer3: "<!--This is a comment-->",
            answer4: "(This is a comment)",
            correctAnswer: "//This is a comment"
        },
        {
            numberQuestion: 7,
            question: "Which event occurs when the user clicks on an HTML element?",
            answer1: "onchange",
            answer2: "onmouseover",
            answer3: "onmouseclick",
            answer4: "onclick",
            correctAnswer: "onclick"
        },
        {
            numberQuestion: 8,
            question: "Which operator is used to assign a value to a variable?",
            answer1: "*",
            answer2: "-",
            answer3: "+",
            answer4: "=",
            correctAnswer: "="
        },
        {
            numberQuestion: 9,
            question: "How do you write the beginning of a 'FOR' loop?",
            answer1: "for i = 1 to 5",
            answer2: "for(i = 0; i <= 5)",
            answer3: "for(i = 0; i <= 5; i ++)",
            answer4: "for(i <=5; i++)",
            correctAnswer: "for(i = 0; i <= 5; i ++)"
        },
        {
            numberQuestion: 10,
            question: "Which of the following functions of an Array object removes the last element from an array and returns that element?",
            answer1: "push()",
            answer2: "pop()",
            answer3: "join()",
            answer4: "map()",
            correctAnswer: "pop()"
        }
    ]