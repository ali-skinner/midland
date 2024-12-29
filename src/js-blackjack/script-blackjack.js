"use strict";

const suit = ["♥", "♦", "♣", "♠"];
console.log(suit)
const value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
console.log(value)


function cardValue(card) {
    if (isNaN(card)) {
        if (card === "A") {
            return 11;
        } else {
            return 10;
        }
    }
    return parseInt(card);
}

function aceValue(card, playerSum) {
    if (card === "A") {
        if (playerSum > 21) {
            return 1;
        } else {
            return 11;
        }
    }
    return parseInt(card);
}

function playerSum () {

}