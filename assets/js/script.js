var startButton = document.getElementById("start-quiz");
startButton.addEventListener("click",renderQuestion);
var headerEl = document.getElementById("header")
var mainEl = document.getElementById("main")
// var questionArr=[""];
function renderQuestion(){
    headerEl.classList.add("hidden");//Targets the header element which will add the class hidden
    mainEl.classList.remove("hidden");//Targets the main element which will remove the class hidden
}