import { twoNum} from "./main.js";
let streak = 0
let longestStreak = 0
let streakh = document.querySelector('.streak')
let longestStreakh = document.querySelector('.longestStreak')


let twoNumForm = document.querySelector("#twonumform");
twoNumForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let guess = document.querySelector('#twonumguess').value;
    let twoNumCorrect = window.currentTwoNumCorrect;
    let correctWords = twoNumCorrect.split(" ")
    let guessSplit = guess.split(" ")
    let check = true;
    if (!correctWords.every(a => guessSplit.includes(a))) { 
                check = false;
    }
    let callback = window.currentTwoNumCallback;
    if (check){
        callback(true)
    } else{
        document.querySelector("#twonumcorrect").textContent = twoNumCorrect;
        callback(false)
        
    }
})

function startTwoNum ()  {twoNum(function(result) {
    if (result === true){
        streak = streak + 1
        if (streak > longestStreak) {
            longestStreak = streak
        }
        startTwoNum()
    } 
    if (result === false){
        streak = 0;
    }
    streakh.textContent = 'Current streak: ' + streak
    longestStreakh.textContent = 'Longest streak: ' + longestStreak
})
}
startTwoNum()
