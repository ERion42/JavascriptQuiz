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
var isComplete;
var isWin;
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
    timeLeft = 15;
    myScore = 0;
    perComplete = 0;
    roundNumber = 0;
}

function roundIncrease() {
    roundNumber++;
    randQuestion();
}

function startGame() {
    // show game segments, hide "BEGIN" button and quiz header
    document.getElementById('quizBody').style.display = 'inline';
    document.getElementById('scoreBox').style.display = 'inline';
    document.getElementById('gameStart').style.display = 'none';

    init();
    roundIncrease();
    randQuestion();
}


function randQuestion() {
    if (roundNumber <= quizQuestions.length) { 

        // Randomize Question //
        var currQuestion = Math.floor(Math.random() * quizQuestions.length);

        // Display Question //
        document.getElementById("pageQuestion").innerHTML = quizQuestions[currQuestion].question;
        document.getElementById("aBtnAnswer").innerHTML = quizQuestions[currQuestion].answers.a;
        document.getElementById("bBtnAnswer").innerHTML = quizQuestions[currQuestion].answers.b;
        document.getElementById("cBtnAnswer").innerHTML = quizQuestions[currQuestion].answers.c;
        document.getElementById("dBtnAnswer").innerHTML = quizQuestions[currQuestion].answers.d;
        
    } else {
        endGame();
    }
}

// Display Round //
function displayRound() {
    document.getElementById("roundNumber").innerHTML = roundNumber;
}
    
function endGame() {
    alert("It's OVER!");
    return;
}

// For buttonclix 
function storeVar(el) {
    answerSub = el.value;
}

// Button Clix
function aClick() {
    var answerSub = "a";
    roundIncrease();
}
function bClick() {
    var answerSub = "b";
    roundIncrease();
}
function cClick() {
    var answerSub = "c";
    roundIncrease();
}
function dClick() {
    var answerSub = "d";
    roundIncrease();
}




startButton.addEventListener("click", startGame);