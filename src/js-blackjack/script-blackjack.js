"use strict";

const suits = ["♥", "♦", "♣", "♠"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const playerSum = []; //should this catch numbers/ranks conv to #'s/ to be evaluated in the whoWon funct?
const dealerSum = []; //should dealerHand / playerHand be added as step one to collect dealt cards (suit and rank), then playerSum used for ranks only?
// break up the dealer/playerHand arrays to make a #'s only array with playerSum? or is this irrelevant bc the cards are setup as objects and can use card.value or is that only good in the buildDeck funct?
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

