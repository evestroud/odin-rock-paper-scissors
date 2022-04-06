// add element selectors for buttons and text objects
const instructions = document.querySelector("#instructions");
const buttons = document.querySelector("ul");
const newGame = document.querySelector("#new-game");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const output = document.querySelector("#output");

// add listeners for buttons
newGame.addEventListener("click", game);
rock.addEventListener("click", play);
paper.addEventListener("click", play);
scissors.addEventListener("click", play);

// Haven't learned objects in this language yet so using global vars instead
let playerScore;
let computerScore;
let winner;
let turn;

function play(event) {
  // Handler for game buttons
  // Get the argument for playTurn from the button text
  let playerSelection = event.target.textContent;
  let computerSelection = computerPlay();
  winner = playTurn(playerSelection, computerSelection);
  turn += 1;
  playerScore += winner === "Player" ? 1 : 0;
  computerScore += winner === "Computer" ? 1 : 0;
  // Create strings to tell the player about the game state
  let resultsMessage =
    "You played " +
    playerSelection.toLowerCase() +
    " and the computer played " +
    computerSelection +
    "! ";
  let winnerMessage =
    winner === "Player"
      ? "You won! "
      : winner === "Computer"
      ? "Computer won! "
      : "Draw!";
  let scoreMessage = `Score: You: ${playerScore} Computer: ${computerScore}. `;
  let turnMessage = `${5 - turn} turns left.`;
  // Game over after 5 turns. Reset buttons and update strings with results
  if (turn >= 5) {
    instructions.textContent = "Game over! Do you want to start a new game?";
    newGameButton();
    let finalWinner =
      playerScore > computerScore
        ? "Player"
        : playerScore < computerScore
        ? "Computer"
        : "Draw";
    turnMessage = "Final winner: " + finalWinner + "!";
  }
  // Put all the gamestate strings into the output element
  output.innerHTML =
    resultsMessage +
    winnerMessage +
    "<br />" +
    scoreMessage +
    "<br /><br />" +
    turnMessage;
}

function computerPlay() {
  // randomly chooses from RPS
  choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playTurn(playerSelection, computerSelection) {
  // play a single round of RPS
  // make sure input is case insensitive
  playerSelection = playerSelection.toLowerCase();
  // return a string that declares the winner
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "Player";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return "Computer";
  } else {
    return "Draw";
  }
}

function game() {
  // Update buttons and page text, initialize game variables
  instructions.textContent = "Choose your weapon!";
  rpsButtons();
  output.textContent = "5 rounds left!";
  playerScore = 0;
  computerScore = 0;
  turn = 0;
}

function newGameButton() {
  // Remove game buttons and make new game button visible
  buttons.removeChild(rock);
  buttons.removeChild(paper);
  buttons.removeChild(scissors);
  buttons.appendChild(newGame);
}

function rpsButtons() {
  // Remove new game button and add game buttons
  buttons.removeChild(newGame);
  buttons.appendChild(rock);
  buttons.appendChild(paper);
  buttons.appendChild(scissors);
}

// Set the initial page state
newGameButton();
