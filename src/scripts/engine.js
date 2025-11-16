// Jogo Yu-Gi-Oh Jo-Ken-Po
// Regras: Dragão (Pedra) > Mago (Papel) > Exodia (Tesoura) > Dragão

const cards = {
    dragon: { name: 'Dragão', icon: './src/assets/icons/dragon.png', beats: 'exodia' },
    magician: { name: 'Mago', icon: './src/assets/icons/magician.png', beats: 'dragon' },
    exodia: { name: 'Exodia', icon: './src/assets/icons/exodia.png', beats: 'magician' }
};

const winAudio = new Audio('./src/assets/audios/win.wav');
const loseAudio = new Audio('./src/assets/audios/lose.wav');

let playerChoice = null;
let computerChoice = null;

// Elementos do DOM
const choiceButtons = document.querySelectorAll('.choice-btn');
const playerCardDisplay = document.getElementById('player-card');
const computerCardDisplay = document.getElementById('computer-card');
const resultDisplay = document.getElementById('result');
const resetButton = document.getElementById('reset-btn');

// Função para escolher carta do jogador
function playerSelect(choice) {
    playerChoice = choice;
    updateCardDisplay(playerCardDisplay, choice);
    computerSelect();
    determineWinner();
}

// Função para escolher carta do computador
function computerSelect() {
    const choices = Object.keys(cards);
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    updateCardDisplay(computerCardDisplay, computerChoice);
}

// Função para atualizar exibição da carta
function updateCardDisplay(displayElement, choice) {
    const img = displayElement.querySelector('img');
    if (!img) {
        const newImg = document.createElement('img');
        newImg.src = cards[choice].icon;
        newImg.alt = cards[choice].name;
        displayElement.appendChild(newImg);
    } else {
        img.src = cards[choice].icon;
        img.alt = cards[choice].name;
    }
    displayElement.classList.add('show');
}

// Função para determinar o vencedor
function determineWinner() {
    if (playerChoice === computerChoice) {
        resultDisplay.textContent = 'Empate! Ambos escolheram ' + cards[playerChoice].name;
    } else if (cards[playerChoice].beats === computerChoice) {
        resultDisplay.textContent = 'Você venceu! ' + cards[playerChoice].name + ' derrota ' + cards[computerChoice].name;
        winAudio.play();
    } else {
        resultDisplay.textContent = 'Você perdeu! ' + cards[computerChoice].name + ' derrota ' + cards[playerChoice].name;
        loseAudio.play();
    }
    resetButton.style.display = 'inline-block';
}

// Função para resetar o jogo
function resetGame() {
    playerChoice = null;
    computerChoice = null;
    playerCardDisplay.classList.remove('show');
    computerCardDisplay.classList.remove('show');
    resultDisplay.textContent = '';
    resetButton.style.display = 'none';
}

// Event listeners
choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const choice = button.getAttribute('data-choice');
        playerSelect(choice);
    });
});

resetButton.addEventListener('click', resetGame);

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    console.log('Yu-Gi-Oh Jo-Ken-Po carregado!');
});
