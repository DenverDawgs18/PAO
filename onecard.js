import {oneCard} from './main.js'
let streak = 0
let longestStreak = 0
let streakh = document.querySelector('.streak')
let longestStreakh = document.querySelector('.longestStreak')

let oneCardForm = document.querySelector("#onecardform");
    oneCardForm.addEventListener("submit", (e) =>{
        e.preventDefault()
        let guess = document.querySelector('#onecardguess').value;
        let threeCardCorrect = window.currentOneCardCorrect;
        let correctWords = threeCardCorrect.split(" ")
        let guessSplit = guess.split(" ")
        let check = true;
        if (!correctWords.every(a => guessSplit.includes(a))) { 
                    check = false;
        }
        let callback = window.currentOneCardCallback;
        if (check){
            callback(true)
        } else{
            document.querySelector("#onecardcorrect").textContent = threeCardCorrect;
            callback(false)
            
        }
    })
function startOneCard ()  {oneCard(function(result) {
        if (result === true){
            streak = streak + 1
            if (streak > longestStreak) {
                longestStreak = streak
            }
            startOneCard()
        } 
        if (result === false){
            streak = 0;
        }
        streakh.textContent = 'Current streak: ' + streak
        longestStreakh.textContent = 'Longest streak: ' + longestStreak
    })
    }
    startOneCard()