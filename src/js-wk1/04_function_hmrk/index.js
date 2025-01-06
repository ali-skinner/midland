// ! 1. Pass a number into a function that will return the absolute value of that number
// ! (absolute value of -1 is 1, and absolute value of 1 is 1) without the use of built in math functions.

function absoluteNum(d) {
    if (d < 0) {
        return d * -1;
    }
    return d;
}
console.log(absoluteNum(-456567));
console.log(absoluteNum(100000000));



//! 2. Make a function called pow that accepts arguments x and y and returns the value of x to the y power

function pow(x, y) {
    return x ** y;
}
console.log(pow(18, 15));


//! 3. Write a function that accepts an array of banned words and an array of words.
//! If any of the banned words appear in the array of words, replace them with "REDACTED.

// how does SPLICE behave in thiss function vs SLICE? SLICE creates a copy / SPLICE alters orig


function redactBadWords(wordsToCheck, bannedWords) {

    let answer = wordsToCheck.slice();

    for (let i = 0; i < answer.length; i++) {

        for (let b = 0; b < bannedWords.length; b++) {

            if (bannedWords[b] === answer[i]) {
                answer[i] = "REDACTED";
            }
        }
    }
    return answer;
}

let wowWords = ["good", "great", "bad", "wonderful"];
let badWords = ["bad", "gross"];

let result = redactBadWords(wowWords, badWords);
console.log(result);

// -----------------------------------------------------------------
//! 4. Write a function to see if a triangle is a right triangle.
//! It's a right triangle if the square of the longest side (hypotenuse) is equal to the sum of the squares of the other sides.
//! Assume that 'a' is the longest side for now, but think about how you might need to change it if we didn't know which one is the hypotenuse.

// a^2 + b^2 = c^2

// a**2 + b**2 = c**2

function rightTriangle(shortSide1, shortSide2, longSide) {

    if ((shortSide1 ** 2 + shortSide2 ** 2) === (longSide ** 2)) {
        return "Yes, this is a right triangle.";
    } else {
        return "nope, this is NOT a right triangle.";
    }
}

let short1 = 2
let short2 = 6
let long1 = 8

let geometryRecall = rightTriangle(short1, short2, long1);
console.log(geometryRecall);


// -----------------------------------------------------------------
//! 5. Write a function to check to see if a warrior can beat all of the monsters in a dungeon.
//! Supply the function with the amount of damage each of the monsters do (in an array),
//! and then the number of health the warrior has.
//!   - If the warrior doesn't have enough health to take all of the attacks, they are unable to survive
//!   - If they have more health than all of the attacks, they are able to survive.

//? Example of monster damage: [1, 3, 2, 8, 5];
//? Example of warrior health: 10;
//? Since 1 + 3 + 2 + 8 + 5 = 19 and 10 - 19 < 0 they could not survive



function battleRoyale(battle1, health) {
    let survival = "";
    let damageTotal = 0; 


    for (let b = 0; b < battle1.length; b++) {
        damageTotal += battle1[b];
    }

        if ((health - damageTotal) > 0) {
            survival = "YOU LIVE";
        } else {
            survival = "welcome to death";
        }
    return survival;
}

let monster2 = [10, 2, 5, 9];
let warriorMojo = 15;

let game1 = battleRoyale(monster2, warriorMojo);
console.log(game1);
