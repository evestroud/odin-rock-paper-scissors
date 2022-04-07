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
rock.addEventListener("click", playTurn);
paper.addEventListener("click", playTurn);
scissors.addEventListener("click", playTurn);

// Haven't learned objects in this language yet so using global vars instead
let playerScore;
let computerScore;
let winner;
let turn;

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

function playTurn(event) {
  // play a single round of RPS
  // make sure input is case insensitive
  let playerSelection = event.target.textContent.toLowerCase();
  let computerSelection = computerPlay();
  // return a string that declares the winner
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerWinsRound();
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerWinsRound();
  } else {
    return "Draw";
  }
}

function playerWinsRound() {
  playerScore += 1;

}

function computerWinsRound() {
  computerScore += 1;
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
