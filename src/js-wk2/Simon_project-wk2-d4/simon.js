"use strict";

// make a button that starts a Game
const startButton ();

// lights up its color for 1-2 seconds
const redButton = document.getElementById("redButton");
const blueButton = document.getElementById("blueButton");
const greenButton = document.getElementById("greenButton");
const yellowButton = document.getElementById("yellowButton");

const gameButtonArray = [redButton, blueButton, greenButton, yellowButton];

const lightUpGameButton() => {
    document.getElementsByClassName("gameButton");
};
// document.getElementById("myBtn").addEventListener("click", displayDate);
// document.getElementByTag("myBtn").addEventListener("click", displayDate);
// <button onclick="myFunction()">display txt if i wanna</button> 


// Pattern for setInterval (does something repeatedly after the delay time)
let intervalRef = setInterval(() => {
    // What to do repeatedly after the interval time
  }, 1000); // Time in miliseconds





// array of numbs 0 - 3; funct to change color shed a timeout to change it and change back transtions color and track array, user click me aray, when numbs dont match, compare it, add subtract
// if nums dont match, do this