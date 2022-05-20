//Created variable which holds the questions and answer
var questions =[{
    question: "1.Which of the following best describes JavaScript",
    choices: ["vara low-level programming language", "a scripting language precompiled in the browser.", "an object-oriented scripting language."],
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
var startButton = document.getElementById("start-quiz");
startButton.addEventListener("click",renderQuestion);
// var createHighScore = document.getElementById("create-high-score");
// createHighScore.addEventListener("click",highScore);
// var gobackbutton = document.getElementById("go-Back");
// gobackbutton.addEventListener("click",renderStartPage);
// var clearScores =document.getElementById("clear-high-score");
// clearScores.addEventListener("click",clearScores);
var headerEl = document.getElementById("header")
var mainEl = document.getElementById("main")
// var questionArr=[""];
function renderQuestion(){
    headerEl.classList.add("hidden");//Targets the header element which will add the class hidden
    mainEl.classList.remove("hidden");//Targets the main element which will remove the class hidden
}

//show the welcome screen
//when user clicks start hide the welcome screen,show the question area
//populate the question area with the question and answer buttons
//when 


