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
var myScore;
var perComplete;
var isComplete;
var isWin;
var roundNumber;
var answerSub;

var startButton = document.querySelector(".start-button");
// Developer Button //
var devButton = document.querySelector(".dev-button")


// Build the QnA Array
const quizQuestions = [
    {
        isComplete: false,
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "<javascript>",
            b: "<js>",
            c: "<script>",
            d: "<scripting>",
        },
        correctAnswer: "c"
    },
    {
        isComplete: false,
        question: "Where is the correct place to insert a JavaScript?",
        answers: {
            a: "Both the <head> section and the <body> section are correct",
            b: "The <body> section",
            c: "The <head> section",
            d: "You should not use JavaScript",
        },
        correctAnswer: "a",
    },
    {
        isComplete: false,
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: {
            a: "<script src='xxx.js'>",
            b: "<script name='xxx.js'>",
            c: "<script href='xxx.js'>",
            d: "You don't have to include the reference for external script, the computer will figure it out through context clues",
        },
        correctAnswer: "a",
    },
    {
        isComplete: false,
        question: "The external JavaScript file must contain the <script> tag.",
        answers: {
            a: "True",
            b: "False",
            c: "True and False",
            d: "Neither True Nor False",
        },
        correctAnswer: "b",
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
}

function startGame() {
    // show game segments, hide "BEGIN" button and quiz header
    document.getElementById('quizBody').style.display = 'inline';
    document.getElementById('scoreBox').style.display = 'inline';
    document.getElementById('gameStart').style.display = 'none';
}








startButton.addEventListener("click", startGame);