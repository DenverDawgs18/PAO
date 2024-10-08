import { numOfDigits } from "./main.js";

document.querySelector('#numbersform').addEventListener('submit', (e) => {
    e.preventDefault()
    let num = document.querySelector('#numbersreq').value 
    numOfDigits(num)
})