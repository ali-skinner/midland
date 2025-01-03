"use strict";

const suits = ["♥", "♦", "♣", "♠"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let playerHand = [];
let dealerHand = [];
let playerSum = []; //feed to didYouWin()
let dealerSum = []; //feed to didYouWin()
let fullDeck = [];


//step #1
dealOutFirstHand();
hitMe();
calcHandSum(playerHand);
playerBusted(playerSum);
dealerHits();


// document.getElementById("stayButton").addEventListener("click", dealersTurn(dealerSum));console.log("here I am");

// dev area --------------->

function playerBusted (handTotal) {
if (handTotal > 21) {
    const playerBustMessage = document.createElement("div");
    playerBustMessage.textContent = ("BUST! You Lose!");
    document.getElementById("player-message").appendChild(playerBustMessage);
    console.log(playerBustMessage);
    return playerBustMessage;
    // alert: "BUST! You Lose!"
    // Print to player div
    // diplay hidden card
    // display totals 
    // enable start, hit buttons
    // reset game
}
}
function dealerBusted (handTotal) {
    if (handTotal > 21) {
        const dealerBustMessage = document.createElement("div");
    dealerBustMessage.textContent = "BUST! You Lose!";
    document.getElementById("dealer-message").appendChild(dealerBustMessage);
    console.log(dealerBustMessage);
    return dealerBustMessage;
        // alert: "BUST! You Lose!"
        // Print to dealer div
        // diplay hidden card
        // display totals 
        // enable start, hit buttons
        // reset game
    }
    }

//--->---needs work >-------------------->------------------>---------------->
function dealersTurn(dealerTotal) {
    
    // i need to loop this
    if (dealerTotal < 17) {
        dealerHits();
    } else if ((dealerTotal > 16) && (dealerTotal < 22)){
        //dealer STAYS [17-21]
        didYouWin();
    } else {
        //dealer BUSTS
        dealerBusted();
    }
}
       //dealersTurn
            //eval dealerSum (in START, call a black jack funct)
            //Dealer HITS on 16 / STAYS on 17
            //if DealerSum < 17; call dealerHits funct
            //continue to call dealerHits until dealerSum > 16 && dealerSum < 22 [17-21]
            //Dealer stays in the range: [17-21]
            //call Bust function
            //call didYouWinfun to compare playerSum vs DealerSum

        
    
//--->---needs work >-------------------->------------------>---------------->
// function stayButton() {
    // document.getElementById("hitMeButton").removeEventListener("click");
//     document.getElementById("stayButton").addEventListener("click", dealersTurn());

// }
 //player stays = activate stayButtion function
            //deactivate hitMe button
            //deactivate stay button
            //eval playerSum
            //call the dealersTurn function


//--->---needs work >-------------------->------------------>---------------->
//didYouWin function
            //didYouWin should display alert/message for Winner/Loser/Draw
            //didYouWin should advance Rouns/Counter -- when to set the counter to 0? upon refresh?
            //didYouWin should reactivate the startButton clickListener
            //didYouWin should reactivate the hitMe clickListener
            //clear out all necessary arrays to reset game
function didYouWin(playerTotal, dealerTotal) {
//     if ((playerTotal > dealerTotal) && (playerTotal < 22)) {
//         alert: You Win! Player Wins!;
//         print: add you "WIN" div to the player id / html;
//         print: add you "LOSE" div to the dealer id / html;
//         print; display score of player hand total in the player hand div / html;
//         print; display score of dealer hand total in dealer hand div / html;
//     } else if ((playerTotal === dealerTotal) && (playerTotal < 22) && (dealerTotal < 22)){
//         alert: "DRAW!" Dealer wins!;
//         print: add you "LOSE" div to the player id / html;
//         print: add you "WIN" div to the dealer id / html;
//         print; display score of player hand total in the player hand div / html;
//         print; display score of dealer hand total in dealer hand div / html;
//     } else ((dealerTotal > playerTotal) && (dealerTotal < 22)){
//
//             alert: Dealer Wins!;
//             print: add you "LOSE" div to the player id / html;
//             print: add you "WIN" div to the dealer id / html;
//             print; display score of player hand total in the player hand div / html;
//             print; display score of dealer hand total in dealer hand div / html;
//         }
//     }
// }
}

//--->---needs work >-------------------->------------------>---------------->

// consider that we may need track ace count
 // --> if ace value = 1 or greater; recalcuate playerSum each loop
// need to add/SUM
// need to give faces cards values
// need to caculate aces 1 and 11 conditional
// need to stay sane 

function calcHandSum(hand) {

    const handTotal = []; //goal is for this to be ONE value
    let handSum = 0;
    let aces = 0;

    for (let i = 0; i < hand.length; i++) {
        const cardValue = (getCardValue(hand[i], handSum));
        handTotal.push(cardValue);
        handSum += cardValue;
        console.log(`This is the PUSH card: ${cardValue}`);
        console.log(`This is the HANDSUM VALUE: ${handSum}`);
    }

    console.log(`This is the HAND TOTAL: ${handTotal}`);
    return handTotal;
}

//--->---needs work >-------------------->------------------>---------------->
function getCardValue(card, playerSum) {
    console.log("from getCardValue:", playerSum);
    if (isNaN(card.value)) {
        console.log("ace functions", card.value);
        if (card.value === "A" || acesInMyHand > 0) {
            console.log("here", card.value);
            if (playerSum > 21) {
                return 1;
            } else {
                return 11;
            }
            //    return 11;
            // return calcAceValue(card, playerSum);
            //need a 2nd parameter here for playerSum.
        } else {
            return 10;
        }
    }

    return parseInt(card.value);
}

// function calcAceValue(card, playerSum) {
//     console.log("from calcAceValue:", playerSum)
//     if (card.value === "A") {
//         if (playerSum > 21) {
//             return 1;
//         } else {
//             return 11;
//         }
//     }
//     return parseInt(card.value);
// }



// --->----looks gd area------->-------------->------------------>-------------->

function dealerHits() {
    document.getElementById("stayButton").addEventListener("click", () => {
        const newCard = drawCard(fullDeck); //get a card
        displayDealerCard(newCard); //display dealer card
        dealerHand.push(newCard); //add to dealer Hand array
        console.log(`The dealer's hand is: ${JSON.stringify(dealerHand)}`);
        calcHandSum(dealerHand);
    });
}
//player hits
function hitMe() {
    document.getElementById("hitMeButton").addEventListener("click", () => {
        const newCard = drawCard(fullDeck); //get a card
        displayPlayerCard(newCard); //display card
        playerHand.push(newCard); //add to playerHand array
        console.log(`The player hand is: ${JSON.stringify(playerHand)}`);
        calcHandSum(playerHand);
    });
}
//dealer card display
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


//Player card display
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


//start the game and deal first hand
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

        //call blackJack function to see if anyone won on first deal

        console.log(`The player hand is: ${JSON.stringify(playerHand)}`);
        console.log(`The dealer hand is: ${JSON.stringify(dealerHand)}`);
        // REMOVE EVENT LISTENER on click start button TO PREVENT LOADING NUMEROUD CARDS AT ONCE? hmmm
        startButton.removeEventListener("click", dealHandler);
    
    }
    startButton.addEventListener("click", dealHandler);
};


//draw a new card
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

//shuffle the deck
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));

        [deck[i], deck[random]] = [deck[random], deck[i]]
    }
}

//build deck
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


