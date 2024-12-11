"use strict";

// need to record the users clicks. capture the computers pattern and compare to the users clicks. if patterns dont match = alert/WRONG Game Over. Clear out the user clicks and reset the game.

// use this random number to illuminate a gameButton [0/red, 1/blue, 2/green, 3/yellow]
// record this number and add it to a variable - .pop?
// for each userGame click that is correct (matches computerGame squence), keep the game going/loop and add 1 to the gameCount. 
// repeat this until either 5 cycles are matches OR user sequence incorrect.
// if computerGame !== userGame alert("WRONG sequence. You lose. Hit Start to begin a new game.")
// if computerGame === userGame alert("WINNER WINNER CHICKEN DINNER! Hit Start to begin a new game.")
//need to reset game counter once an alert is prompted.


//variables
const redButton = document.getElementById("redButton");
const blueButton = document.getElementById("blueButton");
const greenButton = document.getElementById("greenButton");
const yellowButton = document.getElementById("yellowButton");
const gameButtonArray = [redButton, blueButton, greenButton, yellowButton];
// [0/red, 1/blue, 2/green, 3/yellow]

const userGame = []; //this array is capurting the user choice/color from userChoice and is being populated by .push
const computerGame = []; //this array is capturing the random choice/color from computerChoice and is being populated by .push

const compareGames = [] //need to write a function to compare userGame sequence to computerGame sequnce.
// dont 4get! .length starts at 1 and index starts at 0. need to .length - 1 in the function to compare proper positions of the two arrays.

let gameCount = 0; //should this start at 1 for round 1 or sit at 0 until pass through the loop hmmm... OR as soon ast start is pushed, make this go to 1, but then reset after an alert is called.
let gameMessage = "";
let gm = 0;

//start the game
const startGame = document.getElementById("startButton");
startGame.addEventListener("click", () => {
    const computerChoice = Math.floor(Math.random() * 4);
    computerGame.push(computerChoice);
    lightItUp(computerChoice);

    // gameButtonArray[computerChoice].classList.add("gameButtonBright");

    // setTimeout(() => {
    //     gameButtonArray[computerChoice].classList.remove("gameButtonBright");
    // }, 1250);
});


//light up a button
function lightItUp (digit) {
    gameButtonArray[digit].classList.add("gameButtonBright");
    
            setTimeout(() => {
                gameButtonArray[digit].classList.remove("gameButtonBright");
            }, 1250);
}

// function brightButton () {
    const lightUpGameButton = document.getElementsByClassName("gameButton");
    for (let l = 0; l < lightUpGameButton.length; l++) {
    
        lightUpGameButton[l].addEventListener("click", () => {
            lightUpGameButton[l].classList.add("gameButtonBright");
    
            setTimeout(() => {
                lightUpGameButton[l].classList.remove("gameButtonBright");
            }, 1250);
        });
    }
// }

// capture computerChoice/index
// Capture INDEX VALUE (stored in computerGame[] array)

//         

// capture userChoice/index
// Capture INDEX VALUE (stored in userGame[] array)

// const userChoice = document.getElementsByClassName("gameButton");
// for (let i = 0; i < userChoice.length; i++) {
//     userChoice[i].addEventListener("click", () => {

    // userGame.push(userChoice);

    // lightItUp(userChoice);
    
    // checkUserChoice(userChoice);
// };
//         


//check userChoice
// function checkUserChoice(clickedIndexButton) {
// const currentSelection = userGame.length - 1;
// if (clickedIndexButton !== computerGame[currentSelection]) {
// gameOver();
// } else if (userGame.length === computerGame.length) {
// setTimout (() => {
    // addToComputerSequence ();
    // }, 1000);
    // }
// } 


// fuction gameOver () {
// alert("WRONG. You lose. Hit Start to try your luck again.");
//  gameCount = 0;
// };

// fuction gameWinner () {
// alert("WINNER WINNER CHICKEN DINNER! Hit Start to begin a new game.");
//  gameCount = 0;
// };

// while (gameCount<6){
//     gameMessage += "Game Count is: " + gameCount;
//     gameCount++;
//     };

// document.getElementById("gameCounter").innerHTML = gameMessage;



// !from here down, the code is in draft or copy/ premilminary thought/ and doesnt work :(
// need to rewrite the lightupButton and make it a function.

// const userChoice = document.getElementsByClassName("gameButton");
// for (let i = 0; i < userChoice.length; i++) {
//     userChoice[i].addEventListener("click", () => 
//         userGame.push(userChoice));
//      gameButtonArray[userChoice]
//      };

// for (computuerGame === userGame) {
//     let matchCount = 1;
//     gameCount++;
//     need to stop this loop after 5 matches and alert Winner
// } else {
//     alert("WRONG. You lose. Hit Start to try your luck again.");
// reset gameCount to 0;
// };

// while (gameCount<6){
//     gameMessage += "Game Count is: " + gameCount;
//     gameCount++;
//     };

//     document.getElementById("gameCounter").innerHTML = gameMessage;

// start button needs absolute (or is it fixed) positioning to make it centered on the game buttons
// array of numbs 0 - 3; funct to change color shed a timeout to change it and change back transtions color and track array, user click me aray, when numbs dont match, compare it, add subtract
// if nums dont match, do this



// document.getElementById("myBtn").addEventListener("click", displayDate);
// document.getElementByTag("myBtn").addEventListener("click", displayDate);
// <button onclick="myFunction()">display txt if i wanna</button> 

// Pattern for setInterval (does something repeatedly after the delay time)
// let intervalRef = setInterval(() => {
// What to do repeatedly after the interval time
// }, 1000); // Time in miliseconds

// !!!THIS SHOULD PROB ALL BE DELETED FROM HERE DOWN!!!!!. Tried to rescue deleted code, looks like repeat.
// "use strict";

// need to record the users clicks. capture the computers pattern and compare to the users clicks. if patterns dont match = alert/WRONG Game Over. Clear out the user clicks and reset the game.

// use this random number to illuminate a gameButton [0/red, 1/blue, 2/green, 3/yellow]
// record this number and add it to a variable - .pop?
// for each userGame click that is correct (matches computerGame squence), keep going and add 1. 
// repeat this until either 5 cycles are matches OR user doesnt get sequence correct.
// if computerGame !== userGame alert("WRONG sequence. You lose. Hit Start to begin a new game.")
// if computerGame === userGame alert("WINNER WINNER CHICKEN DINNER! Hit Start to begin a new game.")

// const redButton = document.getElementById("redButton");
// const blueButton = document.getElementById("blueButton");
// const greenButton = document.getElementById("greenButton");
// const yellowButton = document.getElementById("yellowButton");
// const gameButtonArray = [redButton, blueButton, greenButton, yellowButton];

// let gameCount = 0; //should this start at 1 for round 1 or sit at 0 until pass through the loop hmmm... OR as soon ast start is pushed, make this go to 1, but then reset after an alert is called.
// let gameMessage = "";
// let gm = 0;
// const userGame = []; //this array is capurting the user choice/color from userChoice and is being populated by .push
// const computerGame = []; //this array is capturing the random choice/color from computerChoice and is being populated by .push

// const startGame = document.getElementById("startButton");
// startGame.addEventListener("click", () => {
//     const computerChoice = Math.floor(Math.random() * 4);
//     computerGame.push(computerChoice);

//     gameButtonArray[computerChoice].classList.add("gameButtonBright");

//     setTimeout(() => {
//         gameButtonArray[computerChoice].classList.remove("gameButtonBright");
//     }, 1250);
// });

// const lightUpGameButton = document.getElementsByClassName("gameButton");
// for (let l = 0; l < lightUpGameButton.length; l++) {

//     lightUpGameButton[l].addEventListener("click", () => {
//         lightUpGameButton[l].classList.add("gameButtonBright");

//         setTimeout(() => {
//             lightUpGameButton[l].classList.remove("gameButtonBright");
//         }, 1250);
//     });
// }

// const userChoice = document.getElementsByClassName("gameButton");
// for (let i = 0; i < userChoice.length; i++) {
//     userChoice[i].addEventListener("click", () => 
//         userGame.push(userChoice));
//      gameButtonArray[userChoice]
//      };

// for (userChoice === computerChoice) {
//     let matchCount = 1;
//     gameCount++;
//     // need to stop this loop after 5 matches and alert Winner
// } else {
//     alert("WRONG. You lose. Hit Start to try your luck again.");
// // reset gameCount to 0;
// };

// while (gameCount<6){
//     gameMessage += "Game Count is: " + gameCount;
//     gameCount++;
//     };

//     document.getElementById("gameCounter").innerHTML = gameMessage;

