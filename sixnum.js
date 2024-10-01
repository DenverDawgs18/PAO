import { sixNum} from "./main.js";
let streak = 0
let longestStreak = 0
let streakh = document.querySelector('.streak')
let longestStreakh = document.querySelector('.longestStreak')


let sixNumForm = document.querySelector("#sixnumform");
sixNumForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let guess = document.querySelector('#sixnumguess').value;
    let SixNumCorrect = window.currentSixNumCorrect;
    let correctWords = SixNumCorrect.split(" ")
    let guessSplit = guess.split(" ")
    let check = true;
    if (!correctWords.every(a => guessSplit.includes(a))) { 
                check = false;
    }
    let callback = window.currentSixNumCallback;
    if (check){
        callback(true)
    } else{
        document.querySelector("#sixnumcorrect").textContent = SixNumCorrect;
        callback(false)
        
    }
})

function startSixNum ()  {sixNum(function(result) {
    if (result === true){
        streak = streak + 1
        if (streak > longestStreak) {
            longestStreak = streak
        }
        startSixNum()
    } 
    if (result === false){
        streak = 0;
    }
    streakh.textContent = 'Current streak: ' + streak
    longestStreakh.textContent = 'Longest streak: ' + longestStreak
})
}
startSixNum()