var startButton = document.getElementById("start-quiz");
startButton.addEventListener("click",renderQuestion);
var createHighScore = document.getElementById("create-high-score");
createHighScore.addEventListener("click",highScore);
var gobackbutton = document.getElementById("go-Back");
gobackbutton.addEventListener("click",renderStartPage);
var clearScores =document.getElementById("clear-high-score");
clearScores.addEventListener("click",clearScores);
var headerEl = document.getElementById("header")
var mainEl = document.getElementById("main")
// var questionArr=[""];
function renderQuestion(){
    headerEl.classList.add("hidden");//Targets the header element which will add the class hidden
    mainEl.classList.remove("hidden");//Targets the main element which will remove the class hidden
}



