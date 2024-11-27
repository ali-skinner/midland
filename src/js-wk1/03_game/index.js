



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
