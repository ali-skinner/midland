"use strict";

const suits = ["♥", "♦", "♣", "♠"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let playerHand = [];
let dealerHand = [];
let playerSum = [];
let dealerSum = [];
let fullDeck = [];


dealOutFirstHand();


function dealOutFirstHand() {
    document.getElementById("startButton").addEventListener("click", () => {
        playerSum = [];  // or should this be the first step in another funct?
        dealerSum = [];  // or should this be the first step in another funct?
        playerHand = [];
        dealerHand = [];
        buildDeck();
        shuffleDeck(fullDeck);
        //push this card into the playerHand array & DISPLAY IT
        playerHand.push(drawCard(fullDeck));
        dealerHand.push(drawCard(fullDeck));
        playerHand.push(drawCard(fullDeck));
        dealerHand.push(drawCard(fullDeck));//this card needs to be hidden
        console.log(`The player hand is: ${JSON.stringify(playerHand)}`);
        console.log(`The dealer hand is: ${JSON.stringify(dealerHand)}`);
        // #dealer-cards 
        // #player-cards

    });
}



function drawCard(deck) {
    if (deck.length > 0) {
        const randomDraw = Math.floor(Math.random() * deck.length);
        // return deck.splice(randomDraw, 1) [0];
        const showMethisCard = deck.splice(randomDraw, 1)[0];
        console.log(`Your card is: ${JSON.stringify(showMethisCard)}`);
        return showMethisCard;
        // do i need to add a display card function here?
    } else {
        buildDeck();
        shuffleDeck();
        const showMethisOtherCard = drawCard(deck);
        console.log(showMethisOtherCard);
        return showMethisOtherCard;
        //return drawCard(deck);
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

