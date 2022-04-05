// add element selectors for buttons and win/lose
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const output = document.querySelector('.output')

function computerPlay() {
// 	randomly chooses from RPS
	choice = Math.floor(Math.random() * 3);
	if (choice === 0) {
		return 'rock';
	} else if (choice === 1) {
		return 'paper';
	} else {
		return 'scissors';
	}
}

function playTurn(playerSelection, computerSelection) {
	//	 play a single round of RPS
	console.log(playerSelection, computerSelection);
	//	 make sure input is case insensitive
	playerSelection = playerSelection.toLowerCase()
	if (playerSelection === 'rock' && computerSelection === 'scissors' ||
		playerSelection === 'paper' && computerSelection === 'rock' ||
		playerSelection === 'scissors' && computerSelection === 'paper') {
	//	 return a string that declares the winner
		return 'Player wins!';
	} else if (playerSelection === 'rock' && computerSelection === 'paper' ||
		playerSelection === 'paper' && computerSelection === 'scissors' ||
		playerSelection === 'scissors' && computerSelection === 'rock') {
	//	 return a string that declares the winner
		return 'Computer wins!';
	} else {
	//	 return a string that declares the winner
		return 'Draw!';
	}
}

// function Game
// 	calls playRound for a 5 round game
//	use prompt() to get input from user

// make more helper functions if necessary
