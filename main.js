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


function twoNum(callback){
    const twoNumInput = document.querySelector("#twonumguess");
    twoNumInput.value = ''
    twoNumInput.focus()
    const twoNumCor = document.querySelector("#twonumcorrect")
    twoNumCor.textContent = ''
    let two = getMaxDigitNumber(2);
    let realpN = two;
    let realp = people[Number(realpN) - 1];
    let reala = actions[Number(realpN) - 1];
    let realo = objects[Number(realpN) - 1];
    let reals = realp + " " + reala + " " + realo;
    let twoText = document.querySelector('.twonum')
    twoText.textContent = two;
    window.currentTwoNumCorrect = reals
    window.currentTwoNumCallback = callback
}

function sixNum(callback){
    const sixNumInput = document.querySelector("#sixnumguess");
    sixNumInput.value = ''
    sixNumInput.focus()
    const sixNumCor = document.querySelector("#sixnumcorrect")
    sixNumCor.textContent = ''
    let six = String(getMaxDigitNumber(6))
    let srealp = people[Number(six.slice(0,2)) - 1]
    let sreala = actions[Number(six.slice(2,4)) - 1]
    let srealo = objects[Number(six.slice(4,6)) - 1]
    let sreal = srealp + " " + sreala + " " + srealo
    let sixText = document.querySelector('.sixnum')
    sixText.textContent = six;
    window.currentSixNumCorrect = sreal;
    window.currentSixNumCallback = callback;
}

function oneCard(callback){
    const oneCardInput = document.querySelector("#onecardguess");
    oneCardInput.value = ''
    oneCardInput.focus()
    const oneCardCor = document.querySelector("#onecardcorrect")
    oneCardCor.textContent = ''
    let oneCardImg = document.querySelector("#onecardimg");
    let oneCardNum = getMaxNumber(52);
    let imgPath = imagePaths[oneCardNum];
    let oneCardCorrect = people[oneCardNum] + " " + actions[oneCardNum] + " " + objects[oneCardNum];
    window.currentOneCardCorrect = oneCardCorrect;
    window.currentOneCardCallback = callback;
    oneCardImg.src = 'fronts/' + imgPath;
    
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
function deckShuffle() {
    let alrUsed = []
    let imgDiv = document.querySelector('.images')
    for (let i = 0; i < 52; i++){
        let num = getMaxNumber(52)
        while (alrUsed.includes(num)) {
            num = getMaxNumber(52)
        }
        alrUsed.push(num)
    }
    let imgPaths = []
    for (let i = 0; i < 52; i++) {
        imgPaths.push('fronts/' + imagePaths[alrUsed[i]])
    }
    console.log(imgPaths)
    for (let i = 0; i < 52; i++) {
        let img = document.createElement('img')
        img.classList = 'oneDeckImg'
        img.src = imgPaths[i]
        imgDiv.appendChild(img)
    }
}

export {twoNum, sixNum, oneCard, threeCard, deckShuffle}
