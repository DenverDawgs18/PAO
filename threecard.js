import { threeCard } from "./main.js";
let streak = 0
let longestStreak = 0
let streakh = document.querySelector('.streak')
let longestStreakh = document.querySelector('.longestStreak')


let threeCardForm = document.querySelector("#threecardform");
threeCardForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let guess = document.querySelector('#threecardguess').value;
    let threeCardCorrect = window.currentThreeCardCorrect;
    let callback = window.currentCallback;
    if (guess == threeCardCorrect){
        callback(true)
    } else{
        document.querySelector("#threecardcorrect").textContent = threeCardCorrect;
        callback(false)
        
    }
})

function startGame ()  {threeCard(function(result) {
    if (result === true){
        streak = streak + 1
        if (streak > longestStreak) {
            longestStreak = streak
        }
        startGame()
    } 
    if (result === false){
        streak = 0;
    }
    streakh.textContent = 'Current streak: ' + streak
    longestStreakh.textContent = 'Longest streak: ' + longestStreak
})
}
startGame()