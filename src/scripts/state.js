export const state = {
  score: {
    playerScore: 0,
    computerScore: 0,
  },
  cardData: [
    {
      id: 0,
      name: "Dragão Branco de Olhos Azuis",
      type: "Papel",
      img: "./src/assets/icons/dragon.png",
      WinOf: [1],
      LoseOf: [2],
    },
    {
      id: 1,
      name: "Mago Negro",
      type: "Pedra",
      img: "./src/assets/icons/magician.png",
      WinOf: [2],
      LoseOf: [0],
    },
    {
      id: 2,
      name: "Exodia",
      type: "Tesoura",
      img: "./src/assets/icons/exodia.png",
      WinOf: [0],
      LoseOf: [1],
    },
  ],
  playerSides: {
    player1: "player-cards",
    computer: "computer-cards",
  },
};
