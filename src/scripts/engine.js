const state ={ //objeto de objetos
    score:{
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById ("score_points")
    },
    cardSprites:{
        avatar: documente.getElementById ("card_image"),
        name: documente.getElementById ("card-name"),
        type: documente.getElementById ("card_type"),
    },
    fieldCards:{
        player: documente.getElementById ("player-field-card"),
        computer: documente.getElementById ("computer-field-card"),
    },
    playerSides: {
        player1: "player-cards",
        player1BOX: document.querySelector("#player-cards"),
        computer: "computer-cards",
        computerBOX: document.querySelector("#computer-cards")
    },
    actions:{
        button:document.getElementById("next-duel"),
    },
};

const playerSides = {
    player1: "player-cards",
    computer: "computer-cards",
}
const pathImages = "./src/assets/icons";

const cardData =[ //O pedra, papel ou tesoura
    {
    id: 0,
    name: "Blue Eyes White Dragon",
    type: "Paper",
    img: `${pathImages}dragon.png`,
    WinOf: [1],
    LoseOf:[2],
    },

    {
    id: 1,
    name: "Dark Magician",
    type: "Rock",
    img: `${pathImages}magician.png`,
    WinOf: [2],
    LoseOf:[0],
    },

    {
    id: 2,
    name: "Exodian",
    type: "Scissors",
    img: `${pathImages}exodia.png`,
    WinOf: [0],
    LoseOf:[1],
    }
];

async function getRandomCardId(){
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData [randomIndex].id;
}

async function creatCardImage(IdCard, fieldSide){
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
    cardImage.setAttribute("data-id", IdCard);
    cardImage.classList.add("card");


    if(fieldSide === playerSides.player1){
        cardImage.addEventListener("mouseover", ()=>{
            drawSelectCard(IdCard);

          
        cardImage.addEventListener("click", ()=> {
            setCardsField(cardImage.getAttribute("data-id"));
        });
    });
    }


    return cardImage;
}

async function setCardsField(cardId){
    await removeAllCardsImage(); //remove todas a cartas antes

    let computerCardId = await getRandomCardId();  //sorteia carta aleatoria para o computador

    await showhiddenCardFieldImages(true)

    await hiddenCardDetails();

    state.fieldCards.player.src = cardData[cardId].img;
    state.fieldCards.computer.src = cardData[computerCardId].img;

    let duelResults = await checkDuelResults(cardId, computerCardId);  //checa os resultados comparando os id's das cartas

    await updateScore();
    await drawButton(duelResults)
}

async function  showhiddenCardFieldImages (value) {

    if (value === true){
        state.fieldCards.player.style.display = "block";
        state.fieldCards.computer.style.display = "block";
    }

    if (value === false){
        state.fieldCards.player.style.display = "none"
        state.fieldCards.computer.style.display = "none"
    }
}
async function hiddenCardDetails() {
    state.cardSprites.avatar.src = "";
    state.cardSprites.name.innerText = "";
    state.cardSprites.type.innerText = "";
}

async function drawButton(text){
    state.actions.button.innerText = text
    state.actions.button.style.display = "block";
}

async function  updateScore(){
    state.score.scoreBox.innerText = `Win: ${state.score.playerScore} | Lose ${state.score.computercore}`
}

async function checkDuelResults(playerCardId, computerCardId){
    let duelResults = "DRAW";
    let playerCard = cardData[playerCardId];

    if(playerCard.WinOf.includes(computerCardId)){
        duelResults = "WIN"
        state.score.playerScore++;
    }

    if(playerCard.LoseOf.includes(computerCardId)){
        duelResults = "LOSE";
        state.score.computerScore++;
    }

    await playAudio("duelResults");

    return duelResults
}

async function removeAllCardsImage(){
    let cards = state.playerSides.computerBOX;  //recupera as cartas do jogador
    let imgElements = cards.querySelectorAll("img")  //pega cada uma das imagens
    imgElements.forEach((img) => img.remove());  //remove a carta do jogador

    cards = state.playerSides.playerBOX;
    imgElements = cards.querySelectorAll("img")
    imgElements.forEach((img) => img.remove());
}

async function drawSelectCard(index){
    state.cardSprites.avatar.src = cardData[index].img;
    state.cardSprites.name.innerText = cardData[index].name;
    state.cardSprites.type.innerText = "Attribute: " + cardData[index.type]
}

async function drawCards(cardNumbers, fieldSide){
    for(let i = 0; i < cardNumbers; i++){
        const randomIdCard = await getRandomCardId();
        const cardImage = await creatCardImage(randomIdcard, fieldSide);

        documente.getElementById(fieldSide).appendChild(cardImage)
    }
}

//resetar duelo
async function resetDuel() {  
    state.cardSprites.avatar.src = "";
    state.actions.button.style.display = "none";

    state.fieldCards.player.style.display = "none"
    state.fieldCards.computer.style.display = "none"

    init();
}

//audio para se perder ou ganhar
async function playAudio(status) { 
    const audio = new Audio(`./src/assets/audios/${status}.wav`)
    audio.play();
}

function init(){
    showhiddenCardFieldImages(false)
    
    //quantas cartas vai sacar
    drawCards(5, "playerSides.player1"); 
    drawCards(5, "playerSides.computer");

    //tocar musica de fundo
    const bgm = document.getElementById("bgm"); 
    bgm.play(); 
}

init();