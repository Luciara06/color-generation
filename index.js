const hexadecimalNumberSystem=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let button=document.getElementById("button")
let resetButton=document.getElementById("reset-button")

let firstHexCode=document.getElementById("first-hex-code")
let firstColorBox=document.getElementById("first-color-box")

let secondHexCode=document.getElementById("second-hex-code")
let secondColorBox=document.getElementById("second-color-box")

let thirdHexCode=document.getElementById("third-hex-code")
let thirdColorBox=document.getElementById("third-color-box")

let fourthHexCode=document.getElementById("fourth-hex-code")
let fourthColorBox=document.getElementById("fourth-color-box")

let fifthHexCode=document.getElementById("fifth-hex-code")
let fifthColorBox=document.getElementById("fifth-color-box")

function generateRandomNumber(){
   let randomNumber= Math.floor(Math.random() * hexadecimalNumberSystem.length) 
   return randomNumber
}

button.addEventListener("click", function(){
    let hexCodeForFirstBox = "#"
    for(let x=0; x<6; x++){
       hexCodeForFirstBox += hexadecimalNumberSystem[generateRandomNumber()]
        console.log(hexCodeForFirstBox)
    }

    firstColorBox.style.backgroundColor=hexCodeForFirstBox
    firstHexCode.textContent=hexCodeForFirstBox
})

button.addEventListener("click", function(){
    let hexCodeForSecondBox = "#"
    for(let x=0; x<6; x++){
       hexCodeForSecondBox += hexadecimalNumberSystem[generateRandomNumber()]
        console.log(hexCodeForSecondBox)
    }

    secondColorBox.style.backgroundColor=hexCodeForSecondBox
    secondHexCode.textContent=hexCodeForSecondBox
})

button.addEventListener("click", function(){
    let hexCodeForThirdBox = "#"
    for(let x=0; x<6; x++){
       hexCodeForThirdBox += hexadecimalNumberSystem[generateRandomNumber()]
        console.log(hexCodeForThirdBox)
    }

    thirdColorBox.style.backgroundColor=hexCodeForThirdBox
    thirdHexCode.textContent=hexCodeForThirdBox
})

button.addEventListener("click", function(){
    let hexCodeForFourthBox = "#"
    for(let x=0; x<6; x++){
       hexCodeForFourthBox += hexadecimalNumberSystem[generateRandomNumber()]
        console.log(hexCodeForFourthBox)
    }

    fourthColorBox.style.backgroundColor=hexCodeForFourthBox
    fourthHexCode.textContent=hexCodeForFourthBox
})

button.addEventListener("click", function(){
    let hexCodeForFifthBox = "#"
    for(let x=0; x<6; x++){
       hexCodeForFifthBox += hexadecimalNumberSystem[generateRandomNumber()]
        console.log(hexCodeForFifthBox)
    }

    fifthColorBox.style.backgroundColor=hexCodeForFifthBox
    fifthHexCode.textContent=hexCodeForFifthBox
})

resetButton.addEventListener("click", function(){
    firstColorBox.style.backgroundColor = "rgb(129, 150, 165)";
    secondColorBox.style.backgroundColor = "rgb(129, 150, 165)";
    thirdColorBox.style.backgroundColor = "rgb(129, 150, 165)";
    fourthColorBox.style.backgroundColor = "rgb(129, 150, 165)";
    fifthColorBox.style.backgroundColor = "rgb(129, 150, 165)";
 
    firstHexCode.textContent = "HEX CODE";
    secondHexCode.textContent = "HEX CODE";
    thirdHexCode.textContent = "HEX CODE";
    fourthHexCode.textContent = "HEX CODE";
    fifthHexCode.textContent = "HEX CODE";
})