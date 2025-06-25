import { state } from "./state.js";
import * as UI from "./ui.js";
import * as Audio from "./audio.js";

function getRandomCardId() {
  return Math.floor(Math.random() * state.cardData.length);
}

async function checkDuelResults(playerCardId, computerCardId) {
  let result = "Empate";
  const playerCard = state.cardData[playerCardId];

  if (playerCard.WinOf.includes(computerCardId)) {
    result = "Ganhou";
    state.score.playerScore++;
    await Audio.playAudio("win");
  } else if (playerCard.LoseOf.includes(computerCardId)) {
    result = "Perdeu";
    state.score.computerScore++;
    await Audio.playAudio("lose");
  }

  return result;
}

async function setCardsField(cardId) {
  UI.showFieldCards(true);
  UI.clearCardDetails();

  const computerCardId = getRandomCardId();

  UI.setFieldCards(state.cardData[cardId], state.cardData[computerCardId]);

  const duelResult = await checkDuelResults(cardId, computerCardId);

  UI.updateScore();
  UI.drawButton(duelResult);
}

async function resetDuel() {
  UI.hideButton();
  UI.showFieldCards(false);
  UI.clearCardDetails();
  await init();
}

async function init() {
  UI.showFieldCards(false);
  UI.updateScore();
  await UI.drawCards(5, state.playerSides.player1);
  await UI.drawCards(5, state.playerSides.computer);
}

function setupEvents() {
  document.addEventListener("cardSelected", async (event) => {
    await setCardsField(event.detail);
  });

  UI.selectors.nextDuelButton ? 
   UI.selectors.nextDuelButton.addEventListener("click", resetDuel):
    null
   ;
}

function startGame() {
  const startBtn = UI.createStartButton();
  startBtn.addEventListener("click", () => {
    startBtn.remove();
    const bgm = document.getElementById("bgm");
    bgm.play();
    init();
    setupEvents();
  });
}

startGame();
