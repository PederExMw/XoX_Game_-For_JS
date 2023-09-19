const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];


let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;

const Players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    },
];

const playerConfigOverlayElement = document.getElementById('configOverlay');
const backDropElement = document.getElementById('backDrop');
const formElement = document.querySelector('form');
const configErrorsElement = document.getElementById('configErrors');
const gameAreaElement = document.getElementById('activeGame');
const activePlayerNameElement = document.getElementById('activePlayername');
const gameOverElement = document.getElementById('gameOver');
const gameBoardElement = document.getElementById('gameBoard');

const editPlayer1BtnElement = document.getElementById('editPlayerBtn1');
const editPlayer2BtnElement = document.getElementById('editPlayerBtn2');
const cancelPlayer3BtnElement = document.getElementById('cancelBtn1');
const startGameBtnElement = document.getElementById('startGameBtn');
// const gameFieldElements = document.querySelectorAll('#gameBoard li');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
startGameBtnElement.addEventListener('click', startNewGame);

cancelPlayer3BtnElement.addEventListener('click', closePlayerConfig);
backDropElement.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit', savePlayerConfig);

// for (const gameFieldElement of gameFieldElements) {
//     gameFieldElement.addEventListener('click', selectGameField);
// }

gameBoardElement.addEventListener('click', selectGameField);

const winnerId = checkForGameOver();
console.log(winnerId)


