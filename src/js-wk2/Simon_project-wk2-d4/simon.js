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

let userGame = []; //this array is capurting the user choice/color from userChoice and is being populated by .push
let computerGame = []; //this array is capturing the random choice/color from computerChoice and is being populated by .push
let gameCount = 0; //should this start at 1 for round 1 or sit at 0 until pass through the loop hmmm... OR as soon ast start is pushed, make this go to 1, but then reset after an alert is called.

//start the game
const startGame = document.getElementById("startButton");
startGame.addEventListener("click", () => {
    setEventListeners();
    generateNextSequence();
});

// add to computerSequence
function generateNextSequence() {
    setGameCounter(`You are in round ${gameCount+1}.`);
    const computerChoice = Math.floor(Math.random() * 4);
    computerGame.push(computerChoice);
    setTimeout(()=>lightThemUp(computerGame), 3000);
}

// removing Event listener
function removeListeners() {
    for (let i = 0; i < gameButtonArray.length; i++) {
       gameButtonArray[i].removeEventListener("click", handleClick); 
    }
}
function setEventListeners() {
    for (let i = 0; i < gameButtonArray.length; i++) {
        gameButtonArray[i].addEventListener("click", handleClick )
    };
}
function handleClick(event) {
    const index = gameButtonArray.indexOf(event.currentTarget);
    handleIt(index);
}

//handle user clicks
function handleIt(i) {
    userGame.push(i);
    lightItUp(i);
    console.log("computerGame: " + computerGame);
    console.log("userGame: " + userGame);

    const indexPosition = userGame.length - 1;
    if (userGame[indexPosition] !== computerGame[indexPosition]) {
        setGameCounter(`YOU ARE A LOSER.
            <br> Hit Start to try again.`);
            resetGame();                    
        // alert("WRONG. You loseR. Hit Start to begin a new game....if you dare.")
    } else {
        if (userGame.length === computerGame.length) {
            userGame = [];
            gameCount++;
            console.log({gameCount});
            if(gameCount<5) {
                generateNextSequence();
            } else{
                setGameCounter("WINNER WINNER CHICKEN DINNER! Hit Start to begin a new game.");
                resetGame();
            };
        };
    };
}


//game counter
function setGameCounter (gameMessage) {
    document.getElementById("gameCounter").innerHTML = gameMessage;
}

//reset Game
function resetGame () {
    console.log("Reset Game pls.");
    removeListeners();
    userGame = []; 
    computerGame = [];
    gameCount = 0; 
}

//lightThemUp
function lightThemUp(digitArray) {
    digitArray.forEach((digit, index) => {
        setTimeout(() => {
            lightItUp(digit);
        }, 1000 * index);
    });
}

//light up a button
function lightItUp(digit) {
    gameButtonArray[digit].classList.add("gameButtonBright");

    setTimeout(() => {
        gameButtonArray[digit].classList.remove("gameButtonBright");
    }, 500);
}


// {
//     userGame.push(i);
//     lightItUp(i);
//     console.log("computerGame: " + computerGame);
//     console.log("userGame: " + userGame);

//     const indexPosition = userGame.length - 1;
//     if (userGame[indexPosition] !== computerGame[indexPosition]) {
//         setGameCounter(`YOU ARE A LOSER.
//             <br> Hit Start to try again.`);
//             resetGame();                    
//         // alert("WRONG. You loseR. Hit Start to begin a new game....if you dare.")
//     } else {
//         if (userGame.length === computerGame.length) {
//             userGame = [];
//             gameCount++;
//             console.log({gameCount});
//             if(gameCount<5) {
//                 generateNextSequence();
//             } else{
//                 setGameCounter("WINNER WINNER CHICKEN DINNER! Hit Start to begin a new game.");
//                 resetGame();
//             };
//         };
//     };
// }
//computerGame Sequence capture
// Capture INDEX VALUE (stored in computerGame[] array)
// after the userChoice is evaluted, and a valid/correct click is confirmed, the correct click is added to userGame.
// i think i need to run a function for the computer to replay all the choices in the computerGame array. hmm... how to make it cycle through the array and then add new. play computerGame array and then us the math.random to .push the new index/color into the computerGame array.
 
       // if (computerGame.length === userGame.length) {
            //     let arraysMatch = true;
            //     computerGame.forEach((computerRandomChoice, index) => {
            //         if (computerRandomChoice !== userGame[index]) {
            //             arraysMatch = false;
            //         }
            //     });
            //     console.log(arraysMatch);

            //     if (!arraysMatch) {
            //         alert("WRONG. You loseR. Hit Start to begin a new game....if you dare.")
            //     } else {
            //         userGame = [];
            //         generateNextSequence();
            //     };
            // }

// function addToComputerSequence() {
//     const choosingColors = document.getElementById("gameButton");
//     choosingColors.addEventListener("click", () => {
//         const newColor = Math.floor(Math.random() * 4);
//         computerGame.push(newColor);
//         lightItUp(newColor);
//         gameCount++;
//         playComputerSequence(computerGame);
//     });
// };

// play computerGame array #FIX THIS 
//  should i be calling th button so then the class property/gm bttn Bright activates?
// for each ? loop through this series so that each button/array indice is called?
// function playComputerSequence() {
//     // for each item in the Array
//     const activateButton = document.getElementById("gameButton");
//     activateButton.classList.add("gameButtonBright");

//     setTimeout(() => {
//         activateButton.classList.remove("gameButtonBright");
//     }, 1250);
// };



// // function brightButton (gameArrayButton???) {
// const lightUpGameButton = document.getElementsByClassName("gameButton");
// for (let l = 0; l < lightUpGameButton.length; l++) {

//     lightUpGameButton[l].addEventListener("click", () => {
//         lightUpGameButton[l].classList.add("gameButtonBright");

//         setTimeout(() => {
//             lightUpGameButton[l].classList.remove("gameButtonBright");
//         }, 1250);
//     });
// }



// // check userChoice
// function checkUserChoice(clickedIndexButton) {
//     const currentSelection = userGame.length - 1;
//     if (clickedIndexButton !== computerGame[currentSelection]) {
//         gameOver();
//     } else if (userGame.length === computerGame.length) {
//         setTimout(() => {
//             addToComputerSequence();
//         }, 1000);
//     }
// };


// function gameOver() {
//     alert("WRONG. You lose. Hit Start to try your luck again.");
//     gameCount = 0;
// };

// function gameWinner() {
//     alert("WINNER WINNER CHICKEN DINNER! Hit Start to begin a new game.");
//     gameCount = 0;
// };

// while (gameCount < 6) {
//     gameMessage += "Game Count is: " + gameCount;
//     gameCount++;
// };





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
// array of numbs 0 - 3; funct to change color sched a timeout to change it and change back transtions color and track array, user click me aray, when numbs dont match, compare it, add subtract
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

