// add element selectors for buttons and win/lose
const instructions = document.querySelector("#instructions");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const output = document.querySelector("#output");

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
    return "Player wins!";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    //	 return a string that declares the winner
    return "Computer wins!";
  } else {
    //	 return a string that declares the winner
    return "Draw!";
  }
}

function game() {
  //	 calls playRound for a 5 round game
  let playerScore = 0;
  let computerScore = 0;
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
