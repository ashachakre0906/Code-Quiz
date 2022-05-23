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
    question: "Which method of an Array object adds and/or removes elements from an array.",
    choices: ["Reverse","shift", "slice", "splice"],
    answer: "splice"
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
//Global Variables
var headerEl = document.getElementById("welcome")
var mainEl = document.getElementById("quiz")
var startButton = document.getElementById("startQuiz");
startButton.addEventListener("click",startQuiz);
var timerEl = document.querySelector("#timer");
//input score page elements
var inputScoreEl = document.querySelector("#inputscore");
var initialsEl = document.querySelector("#initials");
var submitInitial = document.querySelector("#submitInitials");
var scoreEl = document.querySelector("#score");
//Render High Scores Page Elements 
var highScoresEl = document.querySelector("#highscore");
var scoresEl = document.querySelector("#scores");
var goBackEl = document.querySelector("#goback");
var clearScoresEl = document.querySelector("clearscores");
//Viewhigh score and timer page elements
var viewHighScoresBtnEl = document.querySelector("#viewhighscores");
var timerEl = document.querySelector("#timer");
//Start quiz function
function startQuiz(){
    headerEl.style.display="none";//hide welcome
    mainEl.style.display="block";//displays the quiz screen by setting up to block
    renderQuestion();
    startTimer();

}
//Starts and update timer
var timeGiven = 60;
var timerEl = document.querySelector("#timer");
function startTimer() {
    var interval= setInterval(function () {
        if (timeGiven > 1){
            timerEl.textContent = timeGiven + "seconds remaining";
            timeGiven--;
        }else if (timeGiven === 1){
            timerEl.textContent = timeGiven + "seconds remaining";
            timeGiven--;
        }else if (timeGiven <= 0 ){
            timerEl.textContent = "sorry,you are out of time!";
        }else {
            timerEl.textContent = '';
            clearInterval(interval);
        questionEl.style.display = "none";
        answersEl.style.display = "none";
        viewHighScoresBtnEl.style.display = "none";
        timerEl.style.display = "none";
        }
    },1000);
}
//Function to end game and show the final score
function endGame () {

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
//Reset local variables
function reset() {
    score = 0;
    currentQ = 0;
    timerEl.textContent = 0;
}
//checks answer based on current question and updates the user score
function checkAnswer(answer){
    if (questions[currentQ].answer ==questions[currentQ].choices[answer.id]){
        score += 5 ;
      displayMessage("Correct!");
    }
    else{
        timeGiven -= 10;
        displayMessage("OOPS,Its Incorrect...");
    }
    if (currentQ < questions.length -1){
        currentQ++;
        renderQuestion();
    }
}
    
//display message correct or incorrect for few seconds
function displayMessage(m) {
    let messageHr = document.createElement("hr");
    let messageEl = document.createElement("div");
    messageEl.textContent = m;
    document.querySelector(".container-2").appendChild(messageHr);
    document.querySelector(".container-2").appendChild(messageEl);
    setTimeout(function () {
            messageHr.remove();
            messageEl.remove();
    }, 1000);

}
    //Calls to check if the answer is selected
     answersEl.addEventListener("click" , function(e){
      if (e.target.matches("button")){
          checkAnswer(e.target);
      }
    });
    //function to display final score






    









