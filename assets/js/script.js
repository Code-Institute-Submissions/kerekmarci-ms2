var cards;
let isFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false; // if it's not a match, this will lock the board until setTimeout completes
let numberOfCards; // dependent on the level, this will determine how many cards will be generated

// frontFace array contains all available card faces, however, not all of them are used in easy/medium games
const frontFace = ['beetle', 'bmw', 'citroen', 'ferrari', 'jaguar', 'jeep', 'lada', 'lexus', 'mercedes', 'mercury', 'polski', 'porsche', 'saab', 'skoda', 'volvo']; 
let level;
let gameCards;

document.getElementById("easy").addEventListener("click", function() {
    sessionStorage.setItem("gameLevel", "easy");  
    createLevel();
    displayCards();
});

document.getElementById("medium").addEventListener("click", function() {
    sessionStorage.setItem("gameLevel", "medium");  
    createLevel(); 
    displayCards(); 
});

document.getElementById("hard").addEventListener("click", function() {
    sessionStorage.setItem("gameLevel", "hard"); 
    createLevel();
    displayCards();   
});

// This will establish the user level: easy/medium/hard
function createLevel() {
    level = sessionStorage.getItem("gameLevel");
    switch (level) {
        case 'easy':
            numberOfCards = 12;
            chooseRandom(frontFace, 6);
            break;
        case 'medium': 
            numberOfCards = 20;
            chooseRandom(frontFace, 12);            
            break;
        case 'hard':
            numberOfCards = 30;
            chooseRandom(frontFace, 15);
            break;
    } 
}

// getting random cards from frontFace array
// this script was available at https://www.tutorialspoint.com/javascript-how-to-pick-random-elements-from-an-array (visited: 18/03/2021)
const chooseRandom = (frontFace, num = 1) => { 
    gameCards = [];  
    for (let i = 0; i < num;) {
        const random = Math.floor(Math.random() * frontFace.length);
        if (gameCards.indexOf(frontFace[random]) !== -1) {
        continue;
    };
        gameCards.push(frontFace[random]);   
        gameCards.push(frontFace[random]);                
        i++;
    };    
    return gameCards;
};

// This function displays the correct amount of cards based on easy/medium/hard level 
function displayCards() {     
       
    let gameArea = document.getElementById('memory-game-area');
    let card = "";

    for (let i = 0; i < numberOfCards; i++) {        
        let text = `
            <div class="card" data-card="${gameCards[i]}">
                <img src="assets/images/${gameCards[i]}.png" class="front-face" alt="${gameCards[i]}">
                <img src="assets/images/back.png" class="back-face" alt="Back of card">  
            </div> 
        `
        card += text;                
    }   

    gameArea.innerHTML = card;     
    cards = document.querySelectorAll('.card');   
    cards.forEach(card => card.addEventListener('click', flipCard)); 
    
    shuffle();
}

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

function shuffle() {
    cards.forEach(function(card) {
        let randomPos = Math.floor(Math.random() * numberOfCards);
        card.style.order = randomPos;
    });
};
