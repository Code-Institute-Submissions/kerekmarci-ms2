var cards;
let isFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false; // if it's not a match, this will lock the board until setTimeout completes
let numberOfCards; // dependent on the level, this will determine how many cards will be generated

// frontFace array contains all available card faces, however, not all of them are used in easy/medium games
const frontFace = ['beetle', 'bmw', 'citroen', 'ferrari', 'jaguar', 'jeep', 'lada', 'lexus', 'mercedes', 'mercury', 'polski', 'porsche', 'saab', 'skoda', 'volvo']; 
let level;
let gameCards;
let gameArea = document.getElementById('memory-game-area');
let matchCounter; // this will count the number of matching pairs during the game
const progressBar = document.querySelector('#progress-bar');

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
            gameArea.style.width = '600px';
            document.getElementById('game-level').innerHTML = level;
            break;
        case 'medium': 
            numberOfCards = 20;
            chooseRandom(frontFace, 12);  
            gameArea.style.width = '700px'; 
            document.getElementById('game-level').innerHTML = level;         
            break;
        case 'hard':
            numberOfCards = 30;
            chooseRandom(frontFace, 15);
            gameArea.style.width = '800px'; 
            document.getElementById('game-level').innerHTML = level;
            break;
    } 
}

// getting random cards from frontFace array
// this logic was available at https://www.tutorialspoint.com/javascript-how-to-pick-random-elements-from-an-array (visited: 18/03/2021)
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
    
    let card = "";
    matchCounter = 0;
    document.getElementById('match-counter').innerHTML = 0;
    updateProgressBar(progressBar, 0);

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
    startTimer(); // start timer
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
        matchCounter++;
        document.getElementById('match-counter').innerHTML = matchCounter; 
        updateProgressBar(progressBar, matchCounter / (numberOfCards / 2) * 100);       
        if (matchCounter === numberOfCards / 2 ) {
            setTimeout(function() {
                alert('WIN!');
            }, 1500);
            stopTimer();
        }        
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

// ******* TIMER *******

var s;
var m;
var timer;
var stopWatch = document.getElementById('timer');

function startTimer() {
    s = 1;
    m = 0;
    if (!timer) {
        timer = setInterval(runTimer, 1000);
    }    
}

function runTimer() {
    stopWatch.textContent = m + ":" + (s < 10 ? "0" + s : s);   
    s++ 
    if (s == 60) {
        s = 0;
        m++;
    }
}

function stopTimer() {
    clearInterval(timer);    
    timer = false;
}

// ******* PROGRESS BAR *******

function updateProgressBar(pBar, value) {
    value = Math.round(value);
    pBar.querySelector('.progress-fill').style.width = `${value}%`;
    pBar.querySelector('.progress-text').textContent = `${value}%`;
}