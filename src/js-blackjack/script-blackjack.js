"use strict";

// DONE - set up global state
// DONE - add click event listeners
// DONE -make func for initial deal
// DONE - eval if blackjack
// yes = end game
// no = start game  --> hit me needs to check a global variable if the game has been started---> currently will deal two cards 1030am 1/04
//check hit me button funct (remove event listener)
//check stay button funct (remove event listener)
// - end players turn & starts the dealers turn
//check did you win - buid this funct (notes below)
//run end game to diplay scores/results/flip over hidden cards.

const suits = ["♥", "♦", "♣", "♠"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let playerHand = [];
let dealerHand = [];
let playerSum = 0; //feed to didYouWin()
let dealerSum = 0; //feed to didYouWin()
let fullDeck = [];
let gameStarted = false;

const startButton = document.getElementById("startButton");
const hitMeButton = document.getElementById("hitMeButton");
const stayButton = document.getElementById("stayButton");


//start the game and deal first hand >-------------->---------------->----------

startButton.addEventListener("click", () => {
    if (gameStarted === false) {
        console.log("what up tarts");
        //create fullDeck (build and Shuffle)
        //populate player/dealer hands with cards
        //write helper function, params (handArray, elementId, t/f )and it will push and display the card. Can accept an optional third param for "hideCardValue".
        // calcHandSum for each player (review current function)
        // display player score (keep here or use in winner funct?)
        // display dealer score (keep here or use in winner funct?)
        // eval if blackjack
        playerSum = 0;
        dealerSum = 0;
        playerHand = [];
        dealerHand = [];
        buildDeck();
        shuffleDeck(fullDeck);

        //NEED TIMING to slow down the show of cards - setTimout funct?

        playerHand.push(drawCard(fullDeck));
        displayCard(playerHand[0], "player-cards", false);
        dealerHand.push(drawCard(fullDeck));
        displayCard(dealerHand[0], "dealer-cards", false);

        playerHand.push(drawCard(fullDeck));
        displayCard(playerHand[1], "player-cards", false);
        dealerHand.push(drawCard(fullDeck));
        displayCard(dealerHand[1], "dealer-cards", false); //this card needs to be hidden

        playerSum = calcHandSum(playerHand);
        dealerSum = calcHandSum(dealerHand);

        console.log(`The player hand is: ${JSON.stringify(playerHand)}`);
        console.log(`The dealer hand is: ${JSON.stringify(dealerHand)}`);

        const playerBlackJack = false;
        const dealerBlackJack = false;

        blackJack();
        gameStarted = true;


    }
});

//hitMe - Player's Turn
hitMeButton.addEventListener("click", () => {
    if (gameStarted === true) {
        console.log("what up hits");
        hitMe();
        calcHandSum(playerHand);
        //TODO display player score here;
        const didPlayerBust = playerBusted();
        if (didPlayerBust = true) {
            endgame();
        }
    }
});

//Player stay - Dealer's turn
stayButton.addEventListener("click", () => {
    if (gameStarted === true) {
        console.log("what up stay");
        while (dealerSum < 17) {
            dealerHits();
            dealerSum = calcHandSum(dealerHand);
            //add card to dealer hand and display (if >16)
            //calcHandSum
            //update score display
            //eval blackjack or bust
        }
    }
});


//display Player Score
displayPlayerScore() {
    //display playerSum in the player hand banner
    const playerScore = document.createElement("div");
    playerScore.textContent = `${playerSum}`;
    document.getElementById("player-message").appendChild(playerScore);
    console.log("Player Score", playerScore);
    // div id = player-message
}

//display Dealer Score
displayDealerScore() {
    //display Dealer Sum in the dealer hand banner
    const dealerScore = document.createElement("div");
    dealerScore.textContent = `${dealerSum}`;
    document.getElementById("dealer-message").appendChild(dealerScore);
    console.log("Dealer Score", dealerScore);
    // div id = dealer-message   
}

//display Results for Both
//PRINT: Player score is:  Dealer score is:
displayResults() {
    const newResult = document.createElement("div");
    newResult.textContent = `Player Score: ${playerSum}, Dealer Score: ${dealerSum}`;
    document.getElementById("results").appendChild(newResult);
    console.log("Final Results:", newResult);
}

//Reset Game
// endGame() {

// }
// --> diplay hidden card by removing class on the div/variable
// hideCard.className = "card";
// --> display score / hand totals
// --> enable start, hit buttons /reactivate clickListeners
// --> resets game


// blackJack() ------------------------------->
function blackJack() {
    console.log("I made it to the blackJack function!!");
    if (playerSum === 21) {
        //player hits21 message
        const playerWinBlackJackMessage = document.createElement("div");
        playerWinBlackJackMessage.textContent = "BLACKJACK! You WIN!";
        document.getElementById("player-message").appendChild(playerWinBlackJackMessage);
        console.log(playerWinBlackJackMessage);


        //dealer Lose didnt hits21 message
        const dealerLoseBlackJackMessage = document.createElement("div");
        dealerLoseBlackJackMessage.textContent = ("LOSE");
        document.getElementById("dealer-message").appendChild(dealerLoseBlackJackMessage);
        console.log(dealerLoseBlackJackMessage);
        // endGame();
        // return playerWinBlackJackMessage, dealerLoseBlackJackMessage;


    } else if (dealerSum === 21) {
        //dealer hits21 message
        const dealerWinBlackJackMessage = document.createElement("div");
        dealerWinBlackJackMessage.textContent = ("BLACKJACK! Dealer WINs!");
        document.getElementById("dealer-message").appendChild(dealerWinBlackJackMessage);
        console.log(dealerWinBlackJackMessage);

        //player Lose didnt hits21 message
        const playerLoseBlackJackMessage = document.createElement("div");
        playerLoseBlackJackMessage.textContent = ("LOSE");
        document.getElementById("player-message").appendChild(playerLoseBlackJackMessage);
        console.log(playerLoseBlackJackMessage);
        // endGame();
        // return playerLoseBlackJackMessage, dealerWinBlackJackMessage;

    } else {
        // play the game! calling hit me causes double cards to be dealt. shrug.
        console.log("nobody hit blackjack");
    }
}

// busted ()------------------------------->
function playerBusted() {
    if (playerSum > 21) {
        //Player busted
        const playerBustMessage = document.createElement("div");
        playerBustMessage.textContent = ("BUST! You Lose!");
        document.getElementById("player-message").appendChild(playerBustMessage);
        console.log(playerBustMessage);

        //dealer WINS/Player bust message
        const playerBustDealerWonMessage = document.createElement("div");
        playerBustDealerWonMessage.textContent = ("Dealer Wins!");
        document.getElementById("dealer-message").appendChild(playerBustDealerWonMessage);
        console.log(playerBustDealerWonMessage);

        return true;
    }
    return false;
}

function dealerBusted() {
    if (dealerSum > 21) {
        //Dealer busted
        const dealerBustMessage = document.createElement("div");
        dealerBustMessage.textContent = "BUST! You Lose!";
        document.getElementById("dealer-message").appendChild(dealerBustMessage);
        console.log(dealerBustMessage);

        //PLAYER WINS/Dealer bust bust message
        const dealererBustPlayerWonMessage = document.createElement("div");
        dealererBustPlayerWonMessage.textContent = ("YOU Win!");
        document.getElementById("player-message").appendChild(dealererBustPlayerWonMessage);
        console.log(dealererBustPlayerWonMessage);

        return true;
    }
    return false;
}



//>-------------------->------------------>---------------->
//didYouWin function

function didYouWin(playerSum, dealerSum) {
    //     if ((playerSum > dealerTotal) && (playerSum < 22)) {
    //         alert: (in Results div heading below buttons) Player Wins!;
    //         print: add you "WIN" div to the player id / html;
    //         print: add you "LOSE" div to the dealer id / html;
    //         move to endGame() print; display score of player hand total in the player hand div / html;
    //         move to endGame()print; display score of dealer hand total in dealer hand div / html;

    //     } else if ((playerSum === dealerTotal) && (playerSum < 22) && (dealerTotal < 22)){
    //         alert: (in Results div) "DRAW!" Dealer wins!;
    //         print: add you "LOSE" div to the player id / html;
    //         print: add you "WIN" div to the dealer id / html;
    //         move to endGame()print; display score of player hand total in the player hand div / html;
    //         move to endGame()print; display score of dealer hand total in dealer hand div / html;

    //     } else ((dealerTotal > playerSum) && (dealerTotal < 22)){
    //
    //             alert: (in Results div) Dealer Wins!;
    //             print: add you "LOSE" div to the player id / html;
    //             print: add you "WIN" div to the dealer id / html;
    //             move to endGame()print; display score of player hand total in the player hand div / html;
    //             move to endGame()print; display score of dealer hand total in dealer hand div / html;
    //         }
    //     } True / False and set a variable to call diplay score and endgame?
    // } //endgame();
}

//--->---needs work >-------------------->------------------>---------------->

// consider that we may need track ace count
// --> if ace value = 1 or greater; recalcuate playerSum each loop
// need to add/SUM
// need to give faces cards values
// need to caculate aces 1 and 11 conditional
// need to stay sane 

function calcHandSum(hand) {
    let handSum = 0; //goal is for this to be ONE value
    let aces = 0; //need this to count up? or does that happen in getCardValue bc added the aces calc funct there?

    for (let i = 0; i < hand.length; i++) {
        const cardValue = (getCardValue(hand[i], handSum, aces)); //give this a 3rd parameter to count aces?
        handSum += cardValue;
        console.log(`This is the PUSH card: ${cardValue}`);
        console.log(`This is the HANDSUM VALUE: ${handSum}`);
    }

    return handSum;
}

//--->---ACE VALUE needs work >-------------------->------------------>---------------->
function getCardValue(card, playerSum, acesInMyHand) {
    // let acesInMyHand = 0;
    console.log("from getCardValue:", playerSum);
    if (isNaN(card.value)) {
        if (card.value === "A") {
            acesInMyHand++;
        }
        if (card.value === "A" || acesInMyHand > 0) {
            console.log("ace functions", card.value);
            //somehow use acesInMyHand to loop through an evaluation to determine 1 or 11 value for EACH ace
            if (playerSum > 21) {
                return 1;
            } else {
                return 11;
            }
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

//dealer hits
function dealerHits() {
    const newCard = drawCard(fullDeck); //get a card
    displayCard(newCard, "dealer-cards", false); //display dealer card
    dealerHand.push(newCard); //add to dealer Hand array
    console.log(`The dealer's hand is: ${JSON.stringify(dealerHand)}`);
}

function dealersTurn(dealerSum) {
    if ((dealerSum > 16) && (dealerSum < 22)) {
        //dealer STAYS [17-21]
        didYouWin();
    } else {
        //dealer BUSTS
        busted();
    }
}

//player hits
function hitMe() {
    const newCard = drawCard(fullDeck); //get a card
    displayCard(newCard, "player-cards", false); //display card
    playerHand.push(newCard); //add to playerHand array
    console.log(`The player hand is: ${JSON.stringify(playerHand)}`);
}


//Display a card
function displayCard(card, id, shouldHideCard) {
    const viewCard = document.createElement("div");
    if (shouldHideCard === true) {
        viewCard.className = "hidden-card";
    } else {
        viewCard.className = "card";
        // viewCard.innerHTML = card.suit + card.value;
    }
    const upperCardValue = document.createElement("div");
    upperCardValue.textContent = card.suit + card.value;
    upperCardValue.style.textAlign = "left";

    const lowerCardValue = document.createElement("div");
    lowerCardValue.textContent = card.suit + card.value;
    lowerCardValue.style.textAlign = "right";

    if ((card.suit === "♥" || card.suit === "♦") && (shouldHideCard === false)) {
        viewCard.style.color = "red";
    }

    viewCard.appendChild(upperCardValue);
    viewCard.appendChild(lowerCardValue);

    document.getElementById(id).appendChild(viewCard);
    // #dealer-cards is the html id
    // #player-cards is the html id
    return viewCard;
}


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
        shuffleDeck(deck);
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