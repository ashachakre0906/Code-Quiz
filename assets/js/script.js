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
    choices: ["0","1", "2", "3"],
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
//Global Variables
var headerEl = document.getElementById("welcome")
var mainEl = document.getElementById("quiz")
var currentQuestion = 0;
var questionArr=[""];
var timeGiven = 75;
var interval;
var timeElapsed = 0;//The amount of time that passes from the start of an event to its finish.
var timerEl = document.querySelector("#timer");
//Start quiz function
function startQuiz(){
    headerEl.style.display="none";//hide welcome
    mainEl.style.display="block";//displays the quiz screen by setting up to block
    renderQuestion();
    startTimer();
}
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
//Stops Timer
function stopTimer(){
    clearInterval(interval);
}
//Reset local variables
function reset() {
    score = 0;
    currentQ = 0;
    secondsElapsed = 0;
    timerEl.textContent = 0;
}
//checks answer based on current question and updates the user score
function checkAnswer(answer){
    if (questions[currentQ].answer ==questions[currentQ].choices[answer.id]){
        score += 5 ;
        displayMessage("Correct!");
    }
    else{
        secondsElapsed += 10;
        displayMessage("OOPS,Its Incorrect...");
    }
    }
    //Calls to check if the answer is selected
     answersEl.addEventListener("click" , function(e){
      if (e.target.matches("button")){
          checkAnswer(e.target);
      }






    

var startButton = document.getElementById("startQuiz");
startButton.addEventListener("click",startQuiz);








