## Title of the project
Code-Quiz
## Decsription of the project
`Code-Quiz` application to test user's knowledge of javascript.Users needs to answer the question based on the time alloted.`Timer` will deduct 10 secs for selecting every incorrect answer.User should see the final score at the end of the game.`View high score` button should display the scores.`Goback`button should take the user back to Welcome quiz screen and `clear scores` should clear all the scores.

## Links

[Github URL](https://github.com/ashachakre0906/Code-Quiz)<br>
[Live URL](https://ashachakre0906.github.io/Code-Quiz/)<br>

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

```
## Acceptance Criteria
```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

```
**Screenshot**
### Welcome Screen
<img src =./assets/images/screenshot1.png>

### Quiz Screen
<img src =./assets/images/screenshot2.png>

### Submit initials and final score screen
<img src =./assets/images/screenshot3.png>

### high score screen
<img src =./assets/images/screenshot4.png>

### Timer function
```
var timeGiven = 45;
var timerEl = document.querySelector("#timer");
var interval;
function startTimer() {
    interval= setInterval(function () {
        if (timeGiven > 0){
            timerEl.textContent = timeGiven + " secs";
            timeGiven--;        
         }
        else if(timeGiven === 0){
            endGame();
        }
        else {
            timerEl.style.display = "none";
            timerEl.textContent = '';
            clearInterval(interval);
        }
    },1000);
}
```
### Event listener to post the score
```
submitInitial.addEventListener("click",function(e){
        var scoreData = {
         score:score,
         initials:initialsEl.value,
        }
    console.log(scoreData);
    highscores.push(scoreData);//Pushing the data to scoreData array
    localStorage.setItem("highscores",JSON.stringify(highscores));
    initialsEl.value = '';
    inputScoreEl.style.display = "none";
    highScoresEl.style.display = "block";
    timerEl.parentElement.style.display = "none";
    scoresEl.innerHTML = "";
        for (i = 0;i < highscores.length; i++){
            var createLi=document.createElement("li");//creating a list
            createLi.classList.add ("row");
            createLi.setAttribute("style", "background-color:PaleTurquoise;");
            createLi.textContent = `${highscores[i].initials}: ${highscores[i].score}`;
            scoresEl.append(createLi);
        }    
    });  

```
## Built with

- HTMLs
- CSS
- Javascript

### Useful resources

- [w3schools](https://www.w3schools.com/js/default.asp)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)

## Author

Asha Chakre

## License

Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.

Copyright (c) [2022] [Asha Chakre]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.