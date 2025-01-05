"use strict";

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

//TODO age alert
//TODO set timeouts
//TODO aces
//TODO end game not resetting start button and clearing card in didYOuWIn



//start the game and deal first hand >-------------->---------------->----------

startButton.addEventListener("click", () => {
    if (gameStarted === false) {
        console.log("what up gamers");

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
        displayCard(dealerHand[1], "dealer-cards", true); //this card needs to be hidden

        playerSum = calcHandSum(playerHand);
        dealerSum = calcHandSum(dealerHand);

        displayPlayerScore();

        console.log(`The player hand is: ${JSON.stringify(playerHand)}`);
        console.log(`The dealer hand is: ${JSON.stringify(dealerHand)}`);

        blackJack();
        gameStarted = true;
    }
});

//hitMe - Player's Turn
hitMeButton.addEventListener("click", () => {
    if (gameStarted === true) {
        console.log("what up hits");
        hitMe();
        playerSum = calcHandSum(playerHand);
        displayPlayerScore();

        const didPlayerBust = playerBusted();
        if (didPlayerBust === true) {
            endGame();
        }
    }
});

//Player stay - Dealer's turn
stayButton.addEventListener("click", () => {
    if (gameStarted === true) {
        console.log("what up stay");

        const hidingHere = document.getElementsByClassName("hidden-card");
        hidingHere[0].className = "card";

        while (dealerSum < 17) {
            dealerHits();
            dealerSum = calcHandSum(dealerHand);
            //TODO need set time outs

        }
        displayDealerScore();
        const didDealerBust = dealerBusted();
        if (didDealerBust === true) {
            console.log("Dealer is busted.")
            endGame();
        }

        didYouWin();
    }
});


//display Player Score
function displayPlayerScore() {
    //display playerSum in the player hand banner
    const playerScore = document.createElement("div");
    playerScore.textContent = `Player Score: ${playerSum}`;
    const playerMessageElement = document.getElementById("player-message");
    playerMessageElement.innerHTML = "";
    playerMessageElement.appendChild(playerScore);
    console.log("Player Score:", playerScore);
    // div id = player-message
}

//display Dealer Score
function displayDealerScore() {
    //display Dealer Sum in the dealer hand banner
    const dealerScore = document.createElement("div");
    dealerScore.textContent = `Dealer Score: ${dealerSum}`;
    const dealerMessageElement = document.getElementById("dealer-message");
    dealerMessageElement.innerHTML = "";
    dealerMessageElement.appendChild(dealerScore);
    console.log("Dealer Score:", dealerScore);
    // div id = dealer-message   
}

//display Results for Both
//PRINT in Results Heading: "Player score is:  Dealer score is:"
function displayResults() {
    const newResult = document.createElement("div");
    newResult.textContent = `Player Score: ${playerSum}, Dealer Score: ${dealerSum}`;
    const finalResults = document.getElementById("results");
    finalResults.innerHTML = "";
    finalResults.appendChild(newResult);
    console.log("Final Results:", newResult);
}

//End Game - Reset Game
function endGame() {
    displayResults();
    gameStarted = false;
    const hidingHere = document.getElementsByClassName("hidden-card");
    if (hidingHere.length > 0) {
        hidingHere[0].className = "card";
    }

}


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
        endGame();



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
        endGame();

    } else {
        // play the game! calling hit me causes double cards to be dealt.
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


//Winner/Loser/Draw
function didYouWin() {
    console.log("Welcome to the winner eval");

    // Player Wins!
    if ((playerSum > dealerSum) && (playerSum < 22)) {
        displayDealerScore();
        displayPlayerScore();

        //player wins message
        const playerWinMessage = document.createElement("div");
        playerWinMessage.textContent = "PLAYER WIN!";
        document.getElementById("player-message").appendChild(playerWinMessage);
        console.log(playerWinMessage);


        //dealer lose message
        const dealerLoseMessage = document.createElement("div");
        dealerLoseMessage.textContent = ("Dealer LOSE!");
        document.getElementById("dealer-message").appendChild(dealerLoseMessage);
        console.log(dealerLoseMessage);

        endGame();

        // DRAW! Dealer Wins!
    } else if ((playerSum === dealerSum) && (playerSum < 22) && (dealerSum < 22)) {
        displayDealerScore();
        displayPlayerScore();

        //Draw - dealer wins game message
        const dealerDrawMessage = document.createElement("div");
        dealerDrawMessage.textContent = ("Its a DRAW! Dealer WINS!");
        document.getElementById("dealer-message").appendChild(dealerDrawMessage);
        console.log(dealerDrawMessage);

        //Draw - player lose game message
        const playerDrawMessage = document.createElement("div");
        playerDrawMessage.textContent = ("Its a DRAW! Player LOSE!");
        document.getElementById("player-message").appendChild(playerDrawMessage);
        console.log(playerDrawMessage);

        endGame();

        //Dealer Wins!
    } else if ((dealerSum > playerSum) && (dealerSum < 22)) {

        displayDealerScore();
        displayPlayerScore();

        //dealer wins game message
        const dealerWinGameMessage = document.createElement("div");
        dealerWinGameMessage.textContent = ("Dealer WINS!");
        document.getElementById("dealer-message").appendChild(dealerWinGameMessage);
        console.log(dealerWinGameMessage);

        //player lose game message
        const playerLoseGameMessage = document.createElement("div");
        playerLoseGameMessage.textContent = ("Player LOSE");
        document.getElementById("player-message").appendChild(playerLoseGameMessage);
        console.log(playerLoseGameMessage);

        endGame();
    }

}


//--->---< needs work for Aces conditional >------>

//Hand Total
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

//--- Card Value --> ACE VALUE broken --->
    // need to give faces cards values
    // need to caculate aces 1 and 11 conditional
    // consider that we may need track ace count
    // if ace value = 1 or greater; recalcuate playerSum each loop
   
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



//dealer hits
function dealerHits() {
    const newCard = drawCard(fullDeck); //get a card
    displayCard(newCard, "dealer-cards", false); //display dealer card
    dealerHand.push(newCard); //add to dealer Hand array
    console.log(`The dealer's hand is: ${JSON.stringify(dealerHand)}`);
}


// function dealersTurn(dealerSum) {
//     if ((dealerSum > 16) && (dealerSum < 22)) {
//         //dealer STAYS [17-21]
//         didYouWin();
//     } else {
//         //dealer BUSTS
//         busted();
//     }
// }


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