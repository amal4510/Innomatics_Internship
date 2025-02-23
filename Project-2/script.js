const categories = {
    fruits: ['🍎', '🍌', '🍉', '🍇', '🍓', '🍊'],
    emojis: ['😀', '😂', '😎', '🤩', '🥳', '😜'],
    animals: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊'],
    planets: ['🌍', '🪐', '🌕', '☀️', '⭐', '🌑'],
};

let selectedCategory = 'fruits';
let cards = [];
let flippedCards = [];
let score = 0;
let timer;
let timeLeft = 30;

document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        selectedCategory = btn.getAttribute('data-category');
        startGame();
    });
});

document.getElementById('reset-btn').addEventListener('click', startGame);

function startGame() {
    clearInterval(timer);
    timeLeft = 30;
    score = 0;
    document.getElementById('score').textContent = score;
    document.getElementById('timer').textContent = timeLeft;
    document.querySelector('.game-board').innerHTML = '';
    generateCards();
    startTimer();
}

function generateCards() {
    const selectedIcons = [...categories[selectedCategory]];
    const gameIcons = [...selectedIcons, ...selectedIcons].sort(() => Math.random() - 0.5);
    cards = gameIcons.map(icon => createCard(icon));
    document.querySelector('.game-board').append(...cards);
}

function createCard(icon) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.icon = icon;
    card.addEventListener('click', flipCard);
    return card;
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.textContent = this.dataset.icon;
        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.icon === card2.dataset.icon) {
        score += 10;
        document.getElementById('score').textContent = score;
        flippedCards = [];
        if (score === 60) { // Change this based on your max score
            gameWon();
        }
    } else {
        setTimeout(() => {
            card1.textContent = '';
            card2.textContent = '';
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        if (timeLeft === 5) {
            document.getElementById('timer').classList.add('shake');
        }
        if (timeLeft === 0) {
            clearInterval(timer);
            alert('Time is up! Your score: ' + score);
            startGame();
        }
    }, 1000);
}
function gameWon() {
    clearInterval(timer);
    document.getElementById('winning-message').textContent = "🎉 Congratulations! You Won! 🎉";
    document.getElementById('winning-message').style.display = 'block';
    launchConfetti();
}

function launchConfetti() {
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}
startGame();