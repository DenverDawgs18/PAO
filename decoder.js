import { decoder } from "./main.js";

let streak = 0
let longestStreak = 0
let streakh = document.querySelector('.streak')
let longestStreakh = document.querySelector('.longestStreak')

let decoderForm = document.querySelector("#decoderform");
    decoderForm.addEventListener("submit", (e) =>{
        e.preventDefault()
        let decoderCorrect = window.currentDecoderCorrect;
        let guess = document.querySelector('#decoderguess').value
        let callback = window.currentDecoderCallback;
        if (guess === decoderCorrect){
            callback(true)
        } else{
            document.querySelector("#decodercorrect").textContent = decoderCorrect;
            callback(false)
        }
    })
function startDecoder ()  {decoder(function(result) {
        if (result === true){
            streak = streak + 1
            if (streak > longestStreak) {
                longestStreak = streak
            }
            startDecoder()
        } 
        if (result === false){
            streak = 0;
        }
        streakh.textContent = 'Current streak: ' + streak
        longestStreakh.textContent = 'Longest streak: ' + longestStreak
    })
    }
startDecoder()