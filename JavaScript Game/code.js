//console did not need to explain the bugs. I used comments to figure out what code did and didn't work

// Initialize variables
let playerCards = [];
let dealerCards = [];
let sum = 0;
let dealerSum = 0;
let blackjack = false;
let activePlayer = false;
let message = "";
let pOne = document.getElementById("headerMessage");
let pTwo = document.getElementById("yourCards");
let pThree = document.getElementById("yourPoints");
let pFour = document.getElementById("dealerCards");
let pFive = document.getElementById("dealerPoints");

// Reusable function for generating numbers
function rndCard() {
    let rndNum = Math.floor(Math.random() * 11) + 1;
    if (rndNum > 10) {
        return 10
    } else {
        return rndNum
    }
}

// Draw cards after pressing startGame button
function startGame() {
    activePlayer = true;
    cardOne = rndCard();
    cardTwo = rndCard();
    firstDraw = rndCard();
    playerCards = [cardOne, cardTwo];
    dealerCards = [firstDraw];
    sum = cardOne + cardTwo;
    dealerSum = firstDraw;
    
    /* Since two functions were created for each player, I needed to include 
       both functions and order them correctly */
    dealerSetup();
    setup();
    /* The end of the missing code for the "Start Game" button not resetting 
       dealers cards*/
}

// Set up messages & change information
function setup() {
    pTwo.textContent = "Cards: "
    for (let i = 0; i < playerCards.length; i++) {
        pTwo.textContent += playerCards[i] + ", ";
    }
    pThree.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = "DRAW OR STAND";
    } else if (sum === 21) {
        message = "You got Blackjack!";
    } else {
        message = "You lost this round. You went over 21. Want to try again?";
        activePlayer = false;
    }
    pOne.textContent = message;
}

    function dealerSetup() {
    pFour.textContent = "Dealers Cards: "
    for (let i = 0; i < dealerCards.length; i++) {
        pFour.textContent += dealerCards[i] + ", ";
    }
    pFive.textContent = "Sum: " + dealerSum;

    // I had to define an extra result that I missed
    if (dealerSum < sum) {
        message = "You lost. The dealer was closer to 21."
    /* The end of the missing code to prevent the player from automatically
       winning */
    } else if (dealerSum === 21) {
        message = "You lost. The dealer got blackjack.";
    } else if (dealerSum === sum) {
        message = "Push! There is no winner."
    } else {
        message = "You won!! The dealer went over 21.";
        activePlayer = false;
    }
    pOne.textContent = message;
}

// Execute draw card button
function drawCard() {
    if (activePlayer && !blackjack) {
        let card = rndCard();
        playerCards.push(card);
        sum += card;
        setup();
    }
}

// Execute stand button
function stand() {
    // This is why defining active player is important
    if (activePlayer && !blackjack)
     /* The end of the code for preventing the stand button from working until
        after "Start Game" is clicked */
        do {
            let card = rndCard();
            dealerCards.push(card);
            dealerSum += card;
            dealerSetup(); 
        } while (dealerSum < sum);
    
}    

