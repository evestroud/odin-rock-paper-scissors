// add element selectors for buttons and win/lose
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const output = document.querySelector('.output')
//
// function computerPlay
// 	randomly chooses from RPS
function computerPlay() {
	choice = Math.floor(Math.random() * 3);
	if (choice === 0) {
		return 'rock';
	} else if (choice === 1) {
		return 'paper';
	} else {
		return 'scissors';
	}
}

// function playTurn(playerSelection, computerSelection)
// 	play a single round of RPS
// 	return a string that declares the winner
// 	make sure input is case insensitive

// function Game
// 	calls playRound for a 5 round game
//	use prompt() to get input from user

// make more helper functions if necessary
