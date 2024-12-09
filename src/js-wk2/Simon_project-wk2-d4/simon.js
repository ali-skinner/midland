"use strict";

// make a button that starts a Game
// const startButton ();

// lights up its color for 1-2 seconds

// when user hits the start button, the "computer" should light up a random game button. need to record the users clicks. capture the computers pattern and compare to the users clicks. if patterns dont match = alert/WRONG Game Over. Clear out the user clicks and reset the game.

// use this random number to illuminate a gameButton [0/red, 1/blue, 2/green, 3/yellow]
// record this number and add it to a variable - .pop?
// for each userGame click that is correct (matches computerGame squence), keep going and add 1. 
// repeat this until either 5 cycles are matches OR user doesnt get sequence correct.
// if computerGame !== userGame alert("WRONG sequence. You lose. Hit Start to begin a new game.")
// if computerGame === userGame alert("WINNER WINNER CHICKEN DINNER! Hit Start to begin a new game.")

const redButton = document.getElementById("redButton");
const blueButton = document.getElementById("blueButton");
const greenButton = document.getElementById("greenButton");
const yellowButton = document.getElementById("yellowButton");
const gameButtonArray = [redButton, blueButton, greenButton, yellowButton];

let gameCount = 0;
const userGame = [];
const computerGame = [];

const startGame = document.getElementById("startButton");
startGame.addEventListener("click", () => {
    const computerChoice = Math.floor(Math.random() * 4);
    console.log(computerChoice);

    gameButtonArray[computerChoice].classList.add("gameButtonBright");

    setTimeout(() => {
        gameButtonArray[computerChoice].classList.remove("gameButtonBright");
    }, 2000);
});



    // if it picks 0 = display redButton
    // picks 1 = blueButton
    // pick 2 = greenButton
    // pick 3 = yellowButton


    const lightUpGameButton = document.getElementsByClassName("gameButton");
    for (let l = 0; l < lightUpGameButton.length; l++) {

        lightUpGameButton[l].addEventListener("click", () => {
            lightUpGameButton[l].classList.add("gameButtonBright");

            setTimeout(() => {
                lightUpGameButton[l].classList.remove("gameButtonBright");
            }, 2000);
        });
    }


    // start button needs abosulte (or is it fixed) positioning to make it centered on the game buttons
    // array of numbs 0 - 3; funct to change color shed a timeout to change it and change back transtions color and track array, user click me aray, when numbs dont match, compare it, add subtract
    // if nums dont match, do this



    // document.getElementById("myBtn").addEventListener("click", displayDate);
    // document.getElementByTag("myBtn").addEventListener("click", displayDate);
    // <button onclick="myFunction()">display txt if i wanna</button> 

    // Pattern for setInterval (does something repeatedly after the delay time)
    let intervalRef = setInterval(() => {
        // What to do repeatedly after the interval time
    }, 1000); // Time in miliseconds