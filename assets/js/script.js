var startButton = document.getElementById("start-quiz");
startButton.addEventListener("click",renderQuestion);
var headerEl = document.getElementById("header")
var mainEl = document.getElementById("main")
function renderQuestion(){
    headerEl.classList.add("hidden");//
    mainEl.classList.remove("hidden");

}