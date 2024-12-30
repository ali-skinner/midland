"use strict";

const suits = ["♥", "♦", "♣", "♠"];
console.log(suits)
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
console.log(ranks)

const playerSum = [];
const dealerSum = [];
const hiddenDealer = "";
const fullDeck = [];


function buildDeck() {
    suits.forEach((suit) => {
        ranks.forEach((rank) => {
            const card =
        });

    });
}











function generateRandomCard() {
    const randomCard = (Math.floor(Math.random) * 52)
    //    grab a card from the deck
}




function calcPlayerSum() {


}



function getCardValue(card) {
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

