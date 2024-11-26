
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

// let i = 100;
// while (i < 250) {
//     console.log(i); // Will run 5 times (0, 1, 2, 3, 4)
//     i++; // Note: You must manually increment
// }



// GAME STARTS HERE ----- LOOK DOWN
const playerCharacter = {}




const playerName = prompt("Welcome to the Land of Podunkahdonk. If you choose to begin this conquest adventure, please tell me your name?");
playerCharacter.key1 = playerName;
// how do i eliminaate null/empty name??? let playerClass ="" if playerClass isnt null do this...
let playerClass = prompt(`Hello ${playerName}. Choose your character class. Do you want to be a Warrior, a Rogue, a Prince or a Princess?`);

while (playerClass.toLowerCase() !== "warrior" && playerClass.toLowerCase() !== "rogue" && playerClass.toLowerCase() !== "princess" && playerClass.toLowerCase() !== "prince") {
    playerClass = prompt("I didn't understand your selection. Please choose Warrior, Rogue, Prince or Princess.");
}
playerCharacter.key2 = playerClass;

alert(`${playerName}, you have chosen wisely. A ${playerClass} is a strong force to be reckoned with.`);

let pathChoice = prompt(`${playerName}, you now enter the forest and begin your journey. Your speed is great. You come to a fork in your path. Which way do you go? You can go left, right, straight, or end the journey by running out of the forest screaming your head off because you are scared of lurking monsters that will EAT YOU.`);

while (pathChoice.toLowerCase() !== "left" && pathChoice.toLowerCase() !== "right" && pathChoice.toLowerCase() !== "straight" && pathChoice.toLowerCase() !== "end" && pathChoice.toLowerCase() !== "end the journey") {
    pathChoice = prompt("Huh? Please choose your direction: left, right, straight, or end the journey.");
}

playerCharacter.key3 = pathChoice;
alert(`Let's see if ${pathChoice} is a smart decision...(tense music begins)`)

if (pathChoice === "left") {
    alert("Why did you choose left!?! Bad decision, this is the nest of the Dragon Lord. You awoke its babies. The Dragon Lord is ANGRY. She stares at you with vengence. Her eyes to turn to fire and annihilate you. THE END");
} else if (pathChoice === "right") {
    alert("Ahh nice choice. The sun is bright. The wind is calm. You stumble upon a fruit tree. Do you pick fruit?");
} else if (pathChoice === "straight") {
    alert("WOWOWOWOWOW you strike gold. At your feet is chest full of gold, rubies, and diamonds. Do you pick up the treasure chest?");
} else if (pathChoice === "end" || pathChoice === "end the journey") {
    alert("You abruptly turn around run out of the forest screaming. All your screaming draws the attention of the Dragon Lord. The Dragon Lord spares you no mercy. Your loud, cowardice is eaten alive. THE END.");
}
let goToMarket = ""
if (pathChoice === "right" || pathChoice === "straight") {
    goToMarket = prompt("What will it be - yes or no?");
    // TODO validate yes/no
}

// const playerCharacter = {
//     firstName: playerName,
//     characterClass: playerClass,
//     forkInTheRoad: pathChoice,
//     adventure1: goToMarket,
// }
console.log(playerCharacter);











//do ask for class
// while class not one of the ones i want


// let isGoodClass = false;
// if is warrior
//  set true
// if is warrior
//  set true
// if is warrior
//  set true
