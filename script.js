// add element selectors for buttons and win/lose
const instructions = document.querySelector("#instructions");
const buttons = document.querySelector('ul');
const newGame = document.querySelector('#new-game');
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const output = document.querySelector("#output");

// Haven't learned objects in this language yet so just gonna use global vars
let playerScore;
let computerScore;
let turn;

newGame.addEventListener("click", game);
rock.addEventListener("click", play);
paper.addEventListener("click", play);
scissors.addEventListener("click", play);

function play(event) {
  // Handler for game buttons. Plays the turn using the button text.
  playTurn(event.target.textContent, computerPlay());
}


function computerPlay() {
  // 	randomly chooses from RPS
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
  //	 play a single round of RPS
  console.log(playerSelection, computerSelection);
  //	 make sure input is case insensitive
  playerSelection = playerSelection.toLowerCase();
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    //	 return a string that declares the winner
    return "Player";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    //	 return a string that declares the winner
    return "Computer";
  } else {
    //	 return a string that declares the winner
    return "Draw";
  }
}

function game() {
  //	 calls playRound for a 5 round game
  instructions.textContent = "Choose your weapon!"
  rpsButtons()
  playerScore = 0;
  computerScore = 0;
  turn = 0
  for (let i = 0; i < 5; i++) {
    //	use prompt() to get input from user
    let playerSelection = prompt("Choose your weapon!");
    let computerSelection = computerPlay();
    let winner = playTurn(playerSelection, computerSelection);
    output.textContent = "This round: " + winner;
    playerScore += winner === "Player wins!" ? 1 : 0;
    computerScore += winner === "Computer wins!" ? 1 : 0;
  }
  let finalWinner =
    playerScore > computerScore
      ? "Player"
      : playerScore < computerScore
      ? "Computer"
      : "Draw";
  output.textContent = "Final winner: " + finalWinner + "!";
}

function newGameButton() {
  buttons.removeChild(rock);
  buttons.removeChild(paper);
  buttons.removeChild(scissors);
  buttons.appendChild(newGame);
}

function rpsButtons() {
  buttons.removeChild(newGame);
  buttons.appendChild(rock);
  buttons.appendChild(paper);
  buttons.appendChild(scissors);
}

newGameButton()
