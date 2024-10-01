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
    let correctWords = threeCardCorrect.split(" ")
    let guessSplit = guess.split(" ")
    let check = true;
    if (!correctWords.every(a => guessSplit.includes(a))) { 
                check = false;
    }
    let callback = window.currentThreeCardCallback;
    if (check){
        callback(true)
    } else{
        document.querySelector("#threecardcorrect").textContent = threeCardCorrect;
        callback(false)
        
    }
})

function startThreeCard ()  {threeCard(function(result) {
    if (result === true){
        streak = streak + 1
        if (streak > longestStreak) {
            longestStreak = streak
        }
        startThreeCard()
    } 
    if (result === false){
        streak = 0;
    }
    streakh.textContent = 'Current streak: ' + streak
    longestStreakh.textContent = 'Longest streak: ' + longestStreak
})
}
startThreeCard()