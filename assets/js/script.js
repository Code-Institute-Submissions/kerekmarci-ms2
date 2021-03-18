const cards = document.querySelectorAll('.card');

let isFlippedCard = false;
let firstCard, secondCard;

cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard() {
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
}

function unFlipCards() {
    setTimeout(function() {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1500);
}