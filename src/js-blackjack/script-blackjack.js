"use strict";

const suits = ["♥", "♦", "♣", "♠"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let playerHand = [];
let dealerHand = [];
let playerSum = [];
let dealerSum = [];
let fullDeck = [];



//step #1
dealOutFirstHand();
hitMe();


// dev area
function putValuesInSumArrays {
    const popValueOut= playerHand.pop(card.value);
    console.log(`This is the pop out call: ${popValueOut}`);
    const putValuesIn = playerSum.push(popValueOut);
    console.log(`This is the push in call: ${putValuesIn}`);
} 



function calcPlayerSum {
    // add the card.values in the playerHand array and push these values to playerSum
    // call the aceValue funct
    // call the cardValue funct
 }



function stayButton() {
    const stayPut = document.getElementById("stayButton").addEventListener("click", ()=> {
        //call the dealersTurn function
    });
}


//looks gd area
function hitMe() {
    const giveMeCard = document.getElementById("hitMeButton").addEventListener("click", ()=> {
        const newCard = drawCard(fullDeck); //get a card
        displayPlayerCard(newCard); //display card
        playerHand.push(newCard); //add to playerHand array
        console.log(`The player hand is: ${JSON.stringify(playerHand)}`);
    });
}
function displayDealerCard(card) {
    const viewCard = document.createElement("div");
    viewCard.className = "card";
    // viewCard.innerHTML = card.suit + card.value;

    const upperCardValue = document.createElement("div");
    upperCardValue.textContent = card.suit + card.value;
    upperCardValue.style.textAlign = "left";

    const lowerCardValue = document.createElement("div");
    lowerCardValue.textContent = card.suit + card.value;
    lowerCardValue.style.textAlign = "right";

    if (card.suit === "♥" || card.suit === "♦") {
        viewCard.style.color = "red";
    }

    viewCard.appendChild(upperCardValue);
    viewCard.appendChild(lowerCardValue);

    document.getElementById("dealer-cards").appendChild(viewCard);
    // #dealer-cards is the html id
    // #player-cards is the html id
    return viewCard;
}



function displayPlayerCard(card) {
    const viewCard = document.createElement("div");
    viewCard.className = "card";
    // viewCard.innerHTML = card.suit + card.value;

    const upperCardValue = document.createElement("div");
    upperCardValue.textContent = card.suit + card.value;
    upperCardValue.style.textAlign = "left";

    const lowerCardValue = document.createElement("div");
    lowerCardValue.textContent = card.suit + card.value;
    lowerCardValue.style.textAlign = "right";

    if (card.suit === "♥" || card.suit === "♦") {
        viewCard.style.color = "red";
    }

    viewCard.appendChild(upperCardValue);
    viewCard.appendChild(lowerCardValue);

    document.getElementById("player-cards").appendChild(viewCard);
    // #dealer-cards is the html id
    // #player-cards is the html id
    return viewCard;
}




function dealOutFirstHand() {
    document.getElementById("startButton").addEventListener("click", () => {
        playerSum = [];  // or should this be the first step in another funct?
        dealerSum = [];  // or should this be the first step in another funct?
        playerHand = [];
        dealerHand = [];
        buildDeck();
        shuffleDeck(fullDeck);

        //NEED TIMING to slow down the show of cards - setTimout funct?
       
        playerHand.push(drawCard(fullDeck));
        displayPlayerCard(playerHand[0]);
        dealerHand.push(drawCard(fullDeck));
        displayDealerCard(dealerHand [0]);

        playerHand.push(drawCard(fullDeck));
        displayPlayerCard(playerHand[1]);
        dealerHand.push(drawCard(fullDeck));//this card needs to be hidden
        displayDealerCard(dealerHand [1]);


        console.log(`The player hand is: ${JSON.stringify(playerHand)}`);
        console.log(`The dealer hand is: ${JSON.stringify(dealerHand)}`);
        // REMOVE EVENT LISTENER on click start button TO PREVENT LOADING NUMEROUD CARDS AT ONCE? hmmm

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

