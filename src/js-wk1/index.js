
// Logic Practice
// 1. Positive or Negative
// Create a program that checks if a number stored in a variable is positive or negative. 
// Log "The number is positive" if it's greater than zero, otherwise log "The number is negative."

// let x = 1;
// if (x>0) {
//     console.log("The number is positive.");
// } else{
//     console.log("The number is negative.");
// }

// 2. Minimum Age for Driving
// Write a program that checks a person's age stored in a variable and logs "Can drive" if they are 16 or older. 
// If they are under 16, log "Cannot drive."

// const drivingAgeLegally=16;
// let age=15;
// if (age >= drivingAgeLegally){
//     console.log("Freedom!");
// } else{
//     console.log("YOU Cannot drive (legally.)")
// }


// 3. School Grade Levels
// Create a program that categorizes school levels based on a student's grade stored in a variable.
// Use the following categories: "Elementary" for grades 1-5, "Middle" for grades 6-8, and "High" for grades 9-12. 
// Log the school level.

//hmwrk assignment day 2

// COMPARISON PRACTICE
// -----------------------------------------------------------------
//! Build a simple site that prompts a user for their first name and then a number
//! between one and one-hundred (inclusive).
//!  - Tell them whether their number is odd or even and if its greater than,
//!    or less than/equal to 50 and then log those messages separately to the console.

//!  - Log every number before theirs and every number from 100 counting down to theirs in two separate loops.
//!  - If their name is your name send an alert saying that it is a great name
//!  - Log their name in reverse to the console.

// let numberChosen;

// let user = prompt("Welcome and please enter your first name.");
// if (user !=null) {
//     alert("Hi " + user + "! Enter a number between 1 and 100.");
//     numberChosen = prompt("Enter your number.");
// }

// let oddEvenResult = ((numberChosen % 2) === 0) ? "Even" : "Odd";
// console.log("Your number is " + (oddEvenResult) + "."); 

// let greaterThan50 = (numberChosen>=50) ? " greater than or equal to 50." : " less than 50."
// console.log("Your number is" + (greaterThan50));

// use the ++
// alert()


// hmwk wk1 d3

// Create a text based game with at least 5 steps in the adventure. The user will be prompted with different questions at different steps. Essentially, you will be creating a text based flowchart.

// Start by having the player enter their name. Once they do that, save it into an object.
// Next, have them pick a class to be. Tell them the options are "Warrior" or "Rogue" (Or more if you prefer).
// If they type warrior (or rogue), save their class into the object.
// If they did not enter one of the two, prompt them again and tell them it was an invalid entry.
// From here, for every prompt, refer to them as "{their Name} the {their class}".
// Set up 5 obstacles that they must overcome and ask them what they'd like to do. For example:
// You come across a river. Would you like to "Swim" across or "Pay" for a ferry.
// Depending on what the user inputs, follow along with your story and save their choice into the object under an appropriate key.
// At the end of the steps you've set up, tell their story based off the actions they chose.
// (Optional) For added difficulty, add health/damage to the game. You can also add branching choices. For example, if they chose to pay for a ride, they might not be able to afford something later. Or, if they chose to avoid a fight, it adds new options that weren't accessible if they chose to fight.
// You will utilize 02classwork.html and 02classwork.js for this. You shouldn't need any HTML for now, but you can use prompt to get input from the user, and alert (or console.log()) to deliver information.

const playerName = prompt("Welcome to the Adventure. What's your name?");
let playerClass = prompt("Choose your character class. Do you want to be a Warrior, a Rogue, or a Princess?");

if (playerClass !== "Warrior" && playerClass !== "Rogue" && playerClass !== "Princess" ) {
    playerClass = prompt("I didn't understand your selection. Please choose Warrior, Rogue or Princess.")
}

 let playerCharacter = {
    firstName: playerName,
    characterClass: playerClass,
}

//do ask for class
// while class not one of the ones i want


let isGoodClass = false;
if is warrior
 set true
 if is warrior
 set true
 if is warrior
 set true
