"use strict";

const suits = ["♥", "♦", "♣", "♠"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const playerHand = [];
const dealerHand = [];
const playerSum = [];
const dealerSum = []; 

let fullDeck = [];

buildDeck();
shuffleDeck(fullDeck);
drawCard(fullDeck);


//grab a card from the deck;
function drawCard(deck) {
    if (deck.length > 0) {
        const randomDraw = Math.floor(Math.random() * deck.length);
        return deck.splice(randomDraw, 1) [0];

    } else {
        buildDeck();
        shuffleDeck();
        return drawCard(deck);
    }
}

    function calcPlayerSum() {


    }

    function calcDealerSum() {


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
        console.log(fullDeck);
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

