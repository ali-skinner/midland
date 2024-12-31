"use strict";

const suits = ["♥", "♦", "♣", "♠"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const playerHand = [];
const dealerHand = [];
const playerSum = [];
const dealerSum = []; 

let fullDeck = [];

buildDeck();
console.log(fullDeck);
shuffleDeck(fullDeck);
drawCard(fullDeck);


function dealOutAHand() {
const deal = document.getElementById("startButton").addEventListener("click", () => {
 //display two cards for players & 2 cards for dealer
 //push 2cards into the playerHand array
 //loop until playerSum count = 2
 //dealer player 1 card; dealer 1 card, player 2nd car, dealer 2nd card facedown   
});
}



function drawCard(deck) {
    if (deck.length > 0) {
        const randomDraw = Math.floor(Math.random() * deck.length);
        return deck.splice(randomDraw, 1) [0];
// do i need to add a display card function here?
    } else {
        buildDeck();
        shuffleDeck();
        return drawCard(deck);
    }
}

    function shuffleDeck(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            const random = Math.floor(Math.random() * (i + 1));

            [deck[i], deck[random]] = [deck[random], deck[i]]
        }
    }

    function buildDeck() {
        fullDeck = []; //to reset deck each hand
        suits.forEach((suit) => {
            ranks.forEach((rank) => {
                let card = {
                    suit: suit,
                    value: rank
                };
                fullDeck.push(card);
            });

        });
        // console.log(fullDeck);
    }

    function getCardValue(card) {
        if (isNaN(card.value)) {
            if (card.value === "A") {
                return 11;
            } else {
                return 10;
            }
        }
        return parseInt(card.value);
    }

    function aceValue(card, playerSum) {
        if (card.value === "A") {
            if (playerSum > 21) {
                return 1;
            } else {
                return 11;
            }
        }
        return parseInt(card.value);
    }

