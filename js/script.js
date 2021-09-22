// No Javascript yet

// Pseudo Code
/*
    Define Variables

    Create QA Array

    Functions

    On Activation (click)
    What it does:
        Initialize:
            Hide Initial Button
            Set Timer ()
            Set Score (0)
            Set Completion Percentage (0)
            Set Round number (1)
        
        Round Functions:
            Randomize number (between 1 and questions.length)
            Check isUsed value for the random number, if True restart round function
            Load questionsArray[randomized number]
            Mark isUsed = True for that array entry
            Allow Button Clicks:
                Check button click against questionArray[correct answer]
                    if correct: +100 points
                    if incorrect: +0 points
                    
            Check Win Condition [round = questions.length] 
                if win=true: end game
                if win=false: round++

        round ++
            round+1
            Start round again
        
        End Game
            Enter Initials
            Store Initials and score

    */



// Variables Here //
var timeLeft;
var myScore ;
var perComplete;
var roundNumber;
var answerSub;
var currQuestion;

var startButton = document.querySelector(".start-button");

// Build the QnA Array
const quizQuestions = [
    {
        isComplete: false,
        question: "Where is the correct place to insert a JavaScript?",
        answers: {
            a: "Both the <head> section and the <body> section are correct",
            b: "The body section",
            c: "The head section",
            d: "You should not use JavaScript",
        },
        correctAnswer: "a",
    },
    {
        isComplete: false,
        question: "How do you write 'Hello World' in an alert box?",
        answers: {
            a: "msg('Hello World')",
            b: "msgBox('Hello World')",
            c: "alertBox('Hello World')",
            d: "alert('Hello World')",
        },
        correctAnswer: "d",
    },
    {
        isComplete: false,
        question: "How do you create a function in JavaScript?",
        answers: {
            a: "function: myFunction()",
            b: "oh function: myFunction()",
            c: "function = myFunction()",
            d: "function myFunction()",
        },
        correctAnswer: "d",
    },
    {
        isComplete: false,
        question: "How do you call a function named 'myFunction'?",
        answers: {
            a: "call function myFunction()",
            b: "myFunction()",
            c: "call myFunction()",
            d: "1-900-649-2568",
        },
        correctAnswer: "b",
    },
    {
        isComplete: false,
        question: "How to write an IF statement in JavaScript?",
        answers: {
            a: "if i == 5 then",
            b: "if i = 5",
            c: "if i = 5 then",
            d: "if (i == 5)",
        },
        correctAnswer: "d",
    },
    {
        isComplete: false,
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        answers: {
            a: "if (i <> 5)",
            b: "if (i != 5)",
            c: "if i <> 5",
            d: "if i =! 5 then",
        },
        correctAnswer: "b",

    },
    {
        isComplete: false,
        question: "How does a WHILE loop start?",
        answers: {
            a: "while (i <= 10)",
            b: "while i = 1 to 10",
            c: "while (i <= 10, i++)",
            d: "WHILE loops do not start, they have been running since the beginning of time and show no signs of stopping. Do not try to create a new one.",
        },
        correctAnswer: "b",
    },
    {
        isComplete: false,
        question: "JavaScript is the same as Java",
        answers: {
            a: "True",
            b: "False",
            c: "I don't know",
            d: "It's complicated",
        },
        correctAnswer: "b",
    }
]


// Functions Here
function init() {
// This sets the parameters of the code- time, score, percentage complete, and round number
    timeLeft = 30000;
    myScore = 0;
    perComplete = 0;
    roundNumber = 0;
    askQuestion();
}

function askQuestion() {
    // Display Round/Score/Question/Answers //
    displayRound();
    displayScore();
    document.getElementById("pageQuestion").innerHTML = quizQuestions[roundNumber].question;
    document.getElementById("aBtnAnswer").innerHTML = quizQuestions[roundNumber].answers.a;
    document.getElementById("bBtnAnswer").innerHTML = quizQuestions[roundNumber].answers.b;
    document.getElementById("cBtnAnswer").innerHTML = quizQuestions[roundNumber].answers.c;
    document.getElementById("dBtnAnswer").innerHTML = quizQuestions[roundNumber].answers.d;
}

function roundIncrease() {
// Increases round number then asks a question //
    roundNumber++;
    askQuestion();
}

function startGame() {
    // show game segments, hide "BEGIN" button and quiz header, initialize, set timer //
    document.getElementById('quizBody').style.display = 'inline';
    document.getElementById('scoreBox').style.display = 'inline';
    document.getElementById('gameStart').style.display = 'none';
    init();
    timer();
}

// Display Round //
function displayRound() {
    document.getElementById("roundNumber").innerHTML = (roundNumber + 1);
    document.getElementById("perDone").innerHTML = ((roundNumber) * 100 / quizQuestions.length);
}

function displayScore() {
    document.getElementById("score").innerHTML = myScore;
}

function displayTime() {
    document.getElementById("timer").innerHTML = timeLeft;
}

function endGame() {
// Ends game - hides all fields but the high score page //
    alert("It's OVER!");
    document.getElementById('nameInput').style.display = 'flex';
    document.getElementById('quizBody').style.display = 'none';
}


function timer() {
// sets amount of time before quiz ends, not currently working //
}


// For buttonclix 
function storeVar(el) {
    answerSub = el.value;
}

// Button Clix
function aClick() {
    var answerSub = "a";
    if (answerSub === quizQuestions[roundNumber].correctAnswer) {
        myScore = myScore + 200;
    } else {
        myScore = myScore - 100;
    };
    roundIncrease()
}

function bClick() {
    var answerSub = "b";
    if (answerSub === quizQuestions[roundNumber].correctAnswer) {
        myScore = myScore + 200;
    } else {
        myScore = myScore - 100;
    };
    roundIncrease()
}

function cClick() {
    var answerSub = "c";
    if (answerSub === quizQuestions[roundNumber].correctAnswer) {
        myScore = myScore + 200;
    } else {
        myScore = myScore - 100;
    };
    roundIncrease()
}

function dClick() {
    var answerSub = "d";
    if (answerSub === quizQuestions[roundNumber].correctAnswer) {
        myScore = myScore + 200;
    } else {
        myScore = myScore - 100;
    };
    roundIncrease()
}




startButton.addEventListener("click", startGame);