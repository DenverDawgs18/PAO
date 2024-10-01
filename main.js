import {people, actions, objects, imagePaths} from './arrays.js'

function getMaxDigitNumber(digits){
    let max = 10 ** digits
    return Math.floor(Math.random() * max)
}
function getMaxNumber(max){
    return Math.floor(Math.random() * max)
}
function getNumOfDigits(digits){
    let num = ""
    for (let i = 0; i < digits; i++){
        num = num + String(Math.floor(Math.random() * 10))
    }
    return num
}


function twoNum(){
    let two = getMaxDigitNumber(2);
    let realpN = two;
    let realp = people[Number(realpN) - 1];
    let reala = actions[Number(realpN) - 1];
    let realo = objects[Number(realpN) - 1];
    let reals = realp + " " + reala + " " + realo;
    let twoText = document.querySelector('.twonum')
    twoText.textContent = two;
    let form = document.querySelector("#twonumform")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        let guess = document.querySelector('#twonumguess').value;
        console.log(guess)
        if (guess == reals){
            location.reload()
        } else{
            document.querySelector("#twonumcorrect").textContent = reals
        }
    })
}

function sixNum(){
    let six = String(getMaxDigitNumber(6))
    let srealp = people[Number(six.slice(0,2)) - 1]
    let sreala = actions[Number(six.slice(2,4)) - 1]
    let srealo = objects[Number(six.slice(4,6)) - 1]
    let sreal = srealp + " " + sreala + " " + srealo
    let sixText = document.querySelector('.sixnum')
    sixText.textContent = six;
    let sixForm = document.querySelector("#sixnumform")
    sixForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let guess = document.querySelector('#sixnumguess').value;
        console.log(sreal)
        if (guess == sreal){
            location.reload()
        } else{
            document.querySelector("#sixnumcorrect").textContent = sreal
        }
    })
}

function oneCard(){
    let oneCardImg = document.querySelector("#onecardimg");
    let oneCardNum = getMaxNumber(52);
    let imgPath = imagePaths[oneCardNum];
    let oneCardCorrect = people[oneCardNum] + " " + actions[oneCardNum] + " " + objects[oneCardNum];
    oneCardImg.src = 'fronts/' + imgPath;
    let oneCardForm = document.querySelector("#onecardform");
    oneCardForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let guess = document.querySelector('#onecardguess').value;
        if (guess == oneCardCorrect){
            location.reload()
        } else{
            document.querySelector("#onecardcorrect").textContent = oneCardCorrect;
        }
    })
}

function threeCard(callback){
    const threeCardInput = document.querySelector("#threecardguess");
    threeCardInput.value = ''
    threeCardInput.focus()
    const threeCardCor = document.querySelector("#threecardcorrect")
    threeCardCor.textContent = ''
    let [imgOne, imgTwo, imgThree] = [document.querySelector('#threecardimgone'), document.querySelector('#threecardimgtwo'),
        document.querySelector('#threecardimgthree')];
    let [numOne, numTwo, numThree] = [getMaxNumber(52), getMaxNumber(52), getMaxNumber(52)];
    while (numOne == numTwo) {
        numTwo = getMaxNumber(52)
    }
    while (numThree == numOne){
        numThree = getMaxNumber(52)
    }
    while (numTwo == numThree) {
        numTwo = getMaxNumber(52)
    }
    [imgOne.src, imgTwo.src, imgThree.src] = ['fronts/' + imagePaths[numOne], 'fronts/' + imagePaths[numTwo],
     'fronts/' + imagePaths[numThree]]
    let threeCardCorrect = people[numOne] + " " +  actions[numTwo] + " " + objects[numThree]
    window.currentThreeCardCorrect = threeCardCorrect;
    window.currentThreeCardCallback = callback;
    
       
    
}

export {twoNum, sixNum, oneCard, threeCard}
