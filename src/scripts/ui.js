import { state } from "./state.js";

export const selectors = {
  scoreBox: document.getElementById("score_points"),
  cardAvatar: document.getElementById("card-image"),
  cardName: document.getElementById("card-name"),
  cardType: document.getElementById("card-type"),
  playerFieldCard: document.getElementById("player-field-card"),
  computerFieldCard: document.getElementById("computer-field-card"),
  playerCardsContainer: document.getElementById(state.playerSides.player1),
  computerCardsContainer: document.getElementById(state.playerSides.computer),
  nextDuelButton: document.getElementById("next-duel"),
  container: document.querySelector(".container"),
};

export function updateScore() {
  selectors.scoreBox.innerHTML = `Win: ${state.score.playerScore} | Lose: ${state.score.computerScore}`;
}

export function showFieldCards(show) {
  selectors.playerFieldCard.style.display = show ? "block" : "none";
  selectors.computerFieldCard.style.display = show ? "block" : "none";
}

export function clearCardDetails() {
  selectors.cardAvatar.src = "";
  selectors.cardName.textContent = "";
  selectors.cardType.textContent = "";
}

export function drawButton(text) {
  selectors.nextDuelButton.innerText = text;
  selectors.nextDuelButton.style.display = "block";
}

export function hideButton() {
  selectors.nextDuelButton.style.display = "none";
}

export function setFieldCards(playerCard, computerCard) {
  selectors.playerFieldCard.src = playerCard.img;
  selectors.computerFieldCard.src = computerCard.img;
}

export function clearCards(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

export function drawSelectCard(card) {
  selectors.cardAvatar.src = card.img;
  selectors.cardName.textContent = card.name;
  selectors.cardType.textContent = `Atributo : ${card.type}`;
}

export async function drawCards(count, side) {
  clearCards(side === state.playerSides.player1 ? selectors.playerCardsContainer : selectors.computerCardsContainer);

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * state.cardData.length);
    const card = state.cardData[randomIndex];

    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
    cardImage.setAttribute("data-id", card.id);
    cardImage.classList.add("card");

    if (side === state.playerSides.player1) {
      cardImage.addEventListener("mouseover", () => drawSelectCard(card));
      cardImage.addEventListener("click", () => {
        const event = new CustomEvent("cardSelected", { detail: card.id });
        document.dispatchEvent(event);
      });
    }

    const container = side === state.playerSides.player1 ? selectors.playerCardsContainer : selectors.computerCardsContainer;
    container.appendChild(cardImage);
  }
}

export function createStartButton() {
  const startBtn = document.createElement("button");
  startBtn.textContent = "Começar Jogo";
  startBtn.classList.add("start-button");

  selectors.container.insertAdjacentElement("beforebegin", startBtn);

  return startBtn;
}
