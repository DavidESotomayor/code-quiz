// Selecting Elements
var startButton = document.querySelector(".startButton button");
var displayBox = document.querySelector(".displayBox");
var quitButton = displayBox.querySelector(".displayBoxButtons .quit");
var continueButton = displayBox.querySelector(".displayBoxButtons .continue")
var quizBox = document.querySelector(".quizBox");
var answerList = document.querySelector(".answerList");
var currentQuestionCounter = quizBox.querySelector(".questionProgressBar .questionNumberOn");
var timerCount = quizBox.querySelector(".quizBoxTimer .timerSeconds")
var result = document.querySelector(".scoreResults")
var resultButtons = document.querySelector(".scoreResults .scoreResultButtons")
var userScore = document.querySelector(".scoreResults .resultText .answersCorrect")
var questionCounter = 0;
var counter;
var score = 0;

// Start Quiz Button Click Functionality
// displays "Display Box"
// starts timer
startButton.onclick = function () {
    displayBox.classList.add("activeDisplayBox");
    startTimer(60);
}

// Exit Quiz Button Click Functionality
// hides "Display Box"
quitButton.onclick = function () {
    displayBox.classList.remove("activeDisplayBox");
}

answerList.onclick = function (event) {
    if(event.target.matches('.answer')) {
        if (questionCounter < questions.length - 1) {
            questionCounter++;
            currentQuestionCounter.innerHTML = questionCounter + 1;
        displayQuestions(questionCounter);
        } else {
            showScoreResults();
        }
    }
}


// Continue Button Click Functionality
//displays "Quiz Box"
continueButton.onclick = function () {
    displayBox.classList.remove("activeDisplayBox");
    quizBox.classList.add("activeQuizBox");
    displayQuestions(0);
}

// grabbing questions and answers from 'questions' array
function displayQuestions(index) {
    var questionText = document.querySelector(".question");
    var questionElement = '<span>' + questions[index].numberQuestion + ". " + questions[index].question + '</span>';
    var answerElement = '<div class="answer">' + questions[index].answer[0] + '<span></span></div>' 
                        + '<div class="answer">' + questions[index].answer[1] + '<span></span></div>' 
                        + '<div class="answer">' + questions[index].answer[2] + '<span></span></div>' 
                        + '<div class="answer">' + questions[index].answer[3] + '<span></span></div>';
    questionText.innerHTML = questionElement;
    answerList.innerHTML = answerElement;

    var allAnswers = answerList.querySelectorAll(".answer");
    for ( var i = 0; i < allAnswers.length; i++ ){
        allAnswers[i].setAttribute('onclick', 'answerSelected(this)');
    }
}

// comparing user selected answer to correct answer
function answerSelected(answer) {
    var userResponse = answer.textContent;
    var correctResponse = questions[questionCounter].correctAnswer;
    if ( userResponse == correctResponse ){
        score++;
    }
}

// hides display box, quizbox, and shows results
function showScoreResults() {
    displayBox.classList.remove("activeDisplayBox")
    quizBox.classList.remove("activeQuizBox")
    result.classList.add("activeResults")
    userScore.innerHTML = score;
}

// create functionality to timer
function startTimer(time) {
    counter = setInterval(timer, 1000)
    function timer() {
        timerCount.textContent = time;
        time--;
        if ( time < 9 ) {
            var singleNumber = timerCount.textContent;
            timerCount.textContent = "0" + singleNumber;
        }
        if ( time < 0 ) {
            clearInterval(counter);
            timerCount.textContent = "00"
        }
    }
}


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
            correctAnswer: "script",
            answer: [
                "script",
                "javascript",
                "scripting",
                "js"
            ]
        },
        {
            numberQuestion: 2,
            question: "What is the correct syntax for referring to an external script called xxx.js?",
            correctAnswer: "script src='xxx.js'",
            answer: [
                "script src='xxx.js'",
                "script href='xxx.js'",
                "script name='xxx.js'",
                "script img='xxx.js'"
            ]
        },
        {
            numberQuestion: 3,
            question: "How do you write 'Hello World' in an alert box?",
            correctAnswer: "alert('Hello World');",
            answer: [
                "alertBox('Hello World');",
                "alert('Hello World');",
                "msg('Hello World');",
                "msgBox('Hello World');"
            ]
        },
        {
            numberQuestion: 4,
            question: "How do you call a function named 'myFunction'?",
            correctAnswer: "myFunction()",
            answer: [
                "call function myFunction()",
                "call myFunction()",
                "myFunction()",
                "console.log(myFunction())"
            ]
        },
        {
            numberQuestion: 5,
            question: "What is the correct syntax for writing an 'IF' statement?",
            correctAnswer: "if (i == 5)",
            answer: [
                "if i == 5 then",
                "if i == 5",
                "if i = 5 then",
                "if (i == 5)"
            ]
        },
        {
            numberQuestion: 6,
            question: "Where is the best practice for placing your JS script?",
            correctAnswer: "At the end of the body",
            answer: [
                "At the beginning of the head",
                "At the beginning of the body",
                "At the end of the body",
                "At the end of the head"
            ]
        },
        {
            numberQuestion: 7,
            question: "Which event occurs when the user clicks on an HTML element?",
            correctAnswer: "onclick",
            answer: [
                "onchange",
                "onmouseover",
                "onmouseclick",
                "onclick"
            ]  
        },
        {
            numberQuestion: 8,
            question: "Which operator is used to assign a value to a variable?",
            correctAnswer: "=",
            answer: [
                "*",
                "-",
                "+",
                "="
            ]
        },
        {
            numberQuestion: 9,
            question: "How do you write the beginning of a 'FOR' loop?",
            correctAnswer: "for(i = 0; i <= 5; i ++)",
            answer: [
                "for i = 1 to 5",
                "for(i = 0; i <= 5)",
                "for(i = 0; i <= 5; i ++)",
                "for(i <=5; i++)"
            ]
        },
        {
            numberQuestion: 10,
            question: "Which of the following functions of an Array object removes the last element from an array and returns that element?",
            correctAnswer: "pop()",
            answer: [
                "push()",
                "pop()",
                "join()",
                "map()"
            ]
        }
    ]