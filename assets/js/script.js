//Created variable which holds the questions and answer
var questions =[{
    question: "Which of the following best describes JavaScript",
    choices: ["a low-level programming language", "a scripting language precompiled in the browser.", "an object-oriented scripting language.","none of the above"],
    answer: "an object-oriented scripting language"
},
{
    question: "Which JavaScript operator is used to determine the type of a variable?",
    choices: ["typeof", "TypeOf", "typeOf", "sizeof"],
    answer: "typeof"
},
{
    question: "Which property is used to get the length of a string in JavaScript?",
    choices: ["()", "{}", "<>", "[]"],
    answer: "[]"
},
{
    question: "What is the index position of 'mango' in the following array? ['banana', 'mango', 'apple', 'orange', 'strawberries']",
    choices: ["0","1", "2", "3", "4"],
    answer: "1"
},
{
    question: "What does '===' mean in javascript when comparing two things?",
    choices: ["They have the same value", "They are the same type", "They are the same value and type", "They are the same value, type, and style"],
    answer: "They are the same value and type"
},
{
    question: "Which JavaScript method is used to write on browser's console?",
    choices: ["console.write()", "console.output()", "console.log()", "console.writeHTML()"],
    answer: "console.log()"
},
{
    question: "Which JavaScript keyword is used to declare a variable?",
    choices: ["Var", "var", "Let", "All of the above"],
    answer: "var"  
},
];
//score will starts at 0
//index of question array starts at 0
var questionCounter =0;//track the question
//start button to get the quiz started
//Total Time set when the game starts
//10 sec will be deducted for every incorrect answer
var h2 =document.getElementById("h2");
var createHighScore = document.getElementById("create-high-score");
// createHighScore.addEventListener("click",highScore);
var gobackbutton = document.getElementById("go-Back");
// gobackbutton.addEventListener("click",renderQuestion);
var clearScores =document.getElementById("clear-high-score");
// clearScores.addEventListener("click",clearScores);
var headerEl = document.getElementById("welcome")
var mainEl = document.getElementById("quiz")
var currentQuestion = 0;
var questionArr=[""];
var timeGiven = 75;
var interval;
var timeElapsed = 0;//The amount of time that passes from the start of an event to its finish.
var timerEl = document.querySelector("#timer");
//Starts and update timer
function startTimer() {
    timerEl.textContent = timeGiven;
    interval = setInterval(function () {
        timeElapsed++;
        timerEl.textContent = timeGiven - timeElapsed;
        if (timeElapsed >= timeGiven) {
            currentQuestion = questions.length;
            nextQuestion();
        }
    }, 1000);
}
//Renders current question
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var currentQ =0;
function renderQuestion() {
    questionEl.textContent = questions[currentQ].question;
    for (i = 0; i < answersEl.children.length; i++) {
        answersEl.children[i].children[0].textContent = `${(i + 1)}: ${questions[currentQ].choices[i]}`;
    }
}

function startQuiz(){
    headerEl.style.display="none";//hide welcome
    mainEl.style.display="block";//displays the quiz screen by setting up to block
    renderQuestion();
    startTimer();

}

//Stops Timer
function stopTimer(){
    clearInterval(interval);
}




    
// }
//     if (timeInterval===0){
//         timeInterval = setInterval(function() {
//             startingTime--;
//             timeLeft.textContent= "Seconds Left:" + startingTime;
//             if(startingTime <= 0){
//                     clearInterval(timeInterval);
//                     endGame();
//                     timeLeft.textContent = "You are out of time!"
//                 }
//             }, 1000);
//         }
//         renderQuestion();
// });
var startButton = document.getElementById("startQuiz");
startButton.addEventListener("click",startQuiz);








// show the welcome screen
// when user clicks start hide the welcome screen,show the question area
// populate the question area with the question and answer buttons
// when 
