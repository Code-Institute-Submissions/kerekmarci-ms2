const cards = document.querySelectorAll('.card');

let isFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false; // if it's not a match, this will lock the board until setTimeout completes
let numberOfCards; // dependent on the level, this will determine how many cards will be generated

// setting values based on the game level selected
function gameLevel(gameLevel) {
    switch (gameLevel) {
        case easy:
            numberOfCards = 12;
            break;
        case medium: 
            numberOfCards = 20;
            break;
        case hard:
            numberOfCards = 30;
            break;
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return; // to avoid a match if user clicks on the same card twice
    this.classList.add('flip');

    if (!isFlippedCard) {
        // first click
        firstCard = this;
        isFlippedCard = true;

        return;
    }
        // second click
        secondCard = this;
        isFlippedCard = false;     
        
        checkForMatch();  
    }    


function checkForMatch() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        // it's a match
        disableCards();    
    } else {
        // it's not a match  
        unFlipCards();
    }   
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unFlipCards() {
    lockBoard = true;
    setTimeout(function() {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [isFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];    
}

// Shuffle the cards = assigning random position with IIFE
(function shuffle() {
    cards.forEach(function(card) {
        let randomPos = Math.floor(Math.random() * 30);
        card.style.order = randomPos;
    });
})();
