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
calcHandSum(playerHand);


// dev area
// consider that we may need track ace count
// need to add/SUM
// need to give faces cards values
// need to caculate aces 1 and 11 conditional
// need to stay sane 

function getCurrentSum() {
    // this function should be a number
    // the sum of digits before passing to calcHandSum???
    // calc handSum is gonna add the aces values
    // can/should i strip out some of the code below into this funct?
    // i cant fig out how to put all in 1 funct.
    // hate this feeling. why am i even coding.
}

// ------------------------------------------------------------
// funct calc the hand sum needs to return a number.
// this numb is the sum of all card values pushed into the "hand" array.
// this TOTAL numb (1 value) should be pushed into the "sum" variable
// the sum variables are calculated against each other to determin W L D.
// can this be done.
// sooooo frustrated with this %^&$%^$ step


function calcHandSum(hand) {

    const handTotal = []; //goal is for this to be ONE value
    let handSum = 0;

    for (let i = 0; i < hand.length; i++) {
        const cardValue = (getCardValue(hand[i], handSum));
        handTotal.push(cardValue);
        handSum += cardValue;
        console.log(`This is the PUSH card: ${cardValue}`);
        console.log(`This is the HANDSUM VALUE: ${handSum}`);

    }

    console.log(`This is the HAND TOTAL: ${handTotal}`);
    return handTotal;
    ;
}


function getCardValue(card, playerSum) {
    console.log("from getCardValue:", playerSum);
    if (isNaN(card.value)) {
        if (card.value === "A") {
            //    return 11;
            return calcAceValue(card, playerSum);
            //need a 2nd parameter here for playerSum. Claude says make a funct)
        } else {
            return 10;
        }
    }
    return parseInt(card.value);
}

function calcAceValue(card, playerSum) {
    console.log("from calcAceValue:", playerSum)
    if (card.value === "A") {
        if (playerSum > 21) {
            return 1;
        } else {
            return 11;
        }
    }
    return parseInt(card.value);
}


// ------------------------------------------------------------


function stayButton() {
    const stayPut = document.getElementById("stayButton").addEventListener("click", () => {
        //call the dealersTurn function
        //eval dealerSum
        //if DealerSum < 16; call hitMe funct
        //continue to call hitMe until dealerSum > 17
        //stop the hitMe loop when dealerSum > 21;
        //call whoWon fun to compare playerSum vs DealerSum
        //whoWon should display alert/message for Winner/Loser/Draw
        //whoWon should advance Rouns/Counter -- when to set the counter to 0? upon refresh?
        //whoWon should reactivate the startButton clickListener
        //clear out all necessary arrays to reset game
    });
}

// ------------------------------------------------------------
//looks gd area
function hitMe() {
    const giveMeCard = document.getElementById("hitMeButton").addEventListener("click", () => {
        const newCard = drawCard(fullDeck); //get a card
        displayPlayerCard(newCard); //display card
        playerHand.push(newCard); //add to playerHand array
        console.log(`The player hand is: ${JSON.stringify(playerHand)}`);
        calcHandSum(playerHand);
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
    const startButton = document.getElementById("startButton");

    const dealHandler = () => {
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
        displayDealerCard(dealerHand[0]);

        playerHand.push(drawCard(fullDeck));
        displayPlayerCard(playerHand[1]);
        dealerHand.push(drawCard(fullDeck));//this card needs to be hidden
        displayDealerCard(dealerHand[1]);


        playerSum = calcHandSum(playerHand);
        // dealerSum = calcHandSum(dealerHand); //UNCOMMENT ME!!!! UNCOMMENT ME!!!!

        console.log(`The player hand is: ${JSON.stringify(playerHand)}`);
        console.log(`The dealer hand is: ${JSON.stringify(dealerHand)}`);
        // REMOVE EVENT LISTENER on click start button TO PREVENT LOADING NUMEROUD CARDS AT ONCE? hmmm
        startButton.removeEventListener("click", dealHandler);
    }
    startButton.addEventListener("click", dealHandler);
};



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


