// engine.js - corrigido
// Jogo Yu-Gi-Oh! Pedra/Papel/Tesoura
// Mapeia cards para tipos RPS e controla UI + regras

const state = {
  score: {
    playerScore: 0,
    computerScore: 0,
    scoreBox: document.getElementById("score_points"),
  },
  cardSprites: {
    avatar: document.getElementById("card_image"),
    name: document.getElementById("card-name"),
    type: document.getElementById("card-type"),
  },
  fieldCards: {
    player: document.getElementById("player-field-card"),
    computer: document.getElementById("computer-field-card"),
  },
  actions: {
    button: document.getElementById("next-duel"),
  },
};

// Containers para as cartas clicáveis
const playerSides = {
  player1: "player-cards",   // ul/div onde as cartas do jogador são renderizadas
  computer: "computer-card", // ul/div onde as cartas do computador são renderizadas
};

const pathImages = "./src/assets/icons/";

// Banco mínimo de cartas (Pedra / Papel / Tesoura)
const cardData = [
  {
    id: 0,
    name: "Blue Eyes White Dragon",
    type: "Paper",
    img: `${pathImages}dragon.png`,
    WinOf: [1], // Paper vence Rock (1)
    LoseOf: [2], // perde para Scissors (2)
  },
  {
    id: 1,
    name: "Dark Magician",
    type: "Rock",
    img: `${pathImages}magician.png`,
    WinOf: [2], // Rock vence Scissors
    LoseOf: [0], // perde para Paper
  },
  {
    id: 2,
    name: "Exodia",
    type: "Scissors",
    img: `${pathImages}exodia.png`,
    WinOf: [0], // Scissors vence Paper
    LoseOf: [1], // perde para Rock
  },
];

function getRandomCardId() {
  const randomIndex = Math.floor(Math.random() * cardData.length);
  return cardData[randomIndex].id;
}

function drawSelectCard(index) {
  state.cardSprites.avatar.src = cardData[index].img;
  state.cardSprites.name.innerText = cardData[index].name;
  state.cardSprites.type.innerText = "Attribute: " + cardData[index].type;
}

function showHiddenCardFieldImages(visible) {
  state.fieldCards.player.style.display = visible ? "block" : "none";
  state.fieldCards.computer.style.display = visible ? "block" : "none";
}

function hiddenCardDetails() {
  state.cardSprites.avatar.src = "";
  state.cardSprites.name.innerText = "";
  state.cardSprites.type.innerText = "";
}

function drawButton(text) {
  state.actions.button.innerText = text;
  state.actions.button.style.display = "block";
}

function updateScore() {
  state.score.scoreBox.innerText = `Win: ${state.score.playerScore} | Lose: ${state.score.computerScore}`;
}

function removeAllCardsImage() {
  const compBox = document.getElementById(playerSides.computer);
  const playerBox = document.getElementById(playerSides.player1);
  if (compBox) compBox.innerHTML = "";
  if (playerBox) playerBox.innerHTML = "";
}

function checkDuelResults(playerCardId, computerCardId) {
  let result = "DRAW";
  const playerCard = cardData[playerCardId];

  if (playerCard.WinOf.includes(computerCardId)) {
    state.score.playerScore++;
    result = "Você venceu!";
    playAudio("win");
  } else if (playerCard.LoseOf.includes(computerCardId)) {
    state.score.computerScore++;
    result = "Você perdeu!";
    playAudio("lose");
  } else {
    result = "Empate!";
  }

  updateScore();
  return result;
}

function createCardImage(idCard, fieldSide) {
  const cardImage = document.createElement("img");
  cardImage.setAttribute("height", "100px");
  cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
  cardImage.setAttribute("data-id", idCard);
  cardImage.classList.add("card");

  // Interações apenas nas cartas do jogador
  if (fieldSide === playerSides.player1) {
    cardImage.addEventListener("mouseover", () => drawSelectCard(idCard));
    cardImage.addEventListener("click", () => setCardsField(Number(cardImage.getAttribute("data-id"))));
  }

  return cardImage;
}

async function setCardsField(cardId) {
  removeAllCardsImage();

  const computerCardId = getRandomCardId();
  showHiddenCardFieldImages(true);
  hiddenCardDetails();

  state.fieldCards.player.src = cardData[cardId].img;
  state.fieldCards.computer.src = cardData[computerCardId].img;

  const duelResults = checkDuelResults(cardId, computerCardId);
  drawButton(duelResults);
}

function drawCards(cardNumbers, fieldSide) {
  for (let i = 0; i < cardNumbers; i++) {
    const randomIdCard = getRandomCardId();
    const cardImage = createCardImage(randomIdCard, fieldSide);
    const box = document.getElementById(fieldSide);
    if (box) box.appendChild(cardImage);
  }
}

// reset do duelo (botão "GANHOU")
function resetDuel() {
  state.cardSprites.avatar.src = "";
  state.actions.button.style.display = "none";
  showHiddenCardFieldImages(false);
  removeAllCardsImage();
  init();
}

// áudio (win/lose)
function playAudio(status) {
  const audio = new Audio(`./src/assets/audios/${status}.wav`);
  audio.play();
}

// ------------ bootstrap ------------
function init() {
  showHiddenCardFieldImages(false);

  // quantas cartas sortear para cada lado
  drawCards(5, playerSides.player1);
  drawCards(5, playerSides.computer);

  // tocar música de fundo
  const bgm = document.getElementById("bgm");
  if (bgm && bgm.play) {
    bgm.play().catch(() => {});
  }
}

// expõe resetDuel para o botão inline no HTML
window.resetDuel = resetDuel;

init();
