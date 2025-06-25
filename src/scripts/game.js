// game.js
import { state, cardData } from './state.js';
import { drawCards, drawSelectCard, updateScore, drawButton, showCardFields, hideCardDetails, removeAllCardsImages } from './ui.js';
import { playAudio } from './audio.js';

export async function getRandomCardId() {
  const randomIndex = Math.floor(Math.random() * cardData.length);
  return cardData[randomIndex].id;
}

export async function createCardImage(idCard, fieldSide) {
  const cardImage = document.createElement("img");
  cardImage.setAttribute("height", "100px");
  cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
  cardImage.setAttribute("data-id", idCard);
  cardImage.classList.add("card");

  if (fieldSide === state.playerSides.player1) {
    cardImage.addEventListener("mouseover", () => drawSelectCard(idCard));
    cardImage.addEventListener("click", () => setCardsField(cardImage.getAttribute("data-id")));
  }

  return cardImage;
}

export async function setCardsField(cardId) {
  await removeAllCardsImages();
  let computerCardId = await getRandomCardId();
  await showCardFields(true);
  await hideCardDetails();
  await drawCardsInField(cardId, computerCardId);
  let result = await checkDuelResults(cardId, computerCardId);
  await updateScore();
  await drawButton(result);
}

async function drawCardsInField(playerId, computerId) {
  state.fieldCards.player.src = cardData[playerId].img;
  state.fieldCards.computer.src = cardData[computerId].img;
}

async function checkDuelResults(playerCardId, computerCardId) {
  let result = "Empate";
  let playerCard = cardData[playerCardId];

  if (playerCard.WinOf.includes(Number(computerCardId))) {
    result = "Ganhou";
    await playAudio("win");
    state.score.playerScore++;
  }

  if (playerCard.LoseOf.includes(Number(computerCardId))) {
    result = "Perdeu";
    await playAudio("lose");
    state.score.computerScore++;
  }

  return result;
}

export function resetDuel() {
  state.cardSprites.avatar.src = "";
  state.action.button.style.display = "none";
  state.fieldCards.player.style.display = "none";
  state.fieldCards.computer.style.display = "none";
  init();
}

export function init() {
  showCardFields(false);
  drawCards(5, state.playerSides.player1);
  drawCards(5, state.playerSides.computer);

  // Música de fundo com interação
  const bgm = document.getElementById("bgm");
  const startButton = document.createElement("button");
  startButton.innerText = "Começar Jogo";
  startButton.classList.add("start-button");
  document.body.appendChild(startButton);

  startButton.addEventListener("click", () => {
    bgm.play();
    startButton.remove();
  });
}
