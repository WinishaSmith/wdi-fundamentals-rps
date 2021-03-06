////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var winner = "";
var playerMove = "";
var computerMove = "";

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    
    if (playerMove == computerMove){
        winner = 'tie';
    } else if (playerMove === 'rock' && computerMove === 'scissors') {
        winner = 'player';
    } else if (playerMove === 'scissors' && computerMove === 'rock') {
        winner = 'computer';
    } else if (playerMove === 'rock' && computerMove === 'paper') {
        winner = 'computer';
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        winner = 'player';
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = 'player';
    } else if (playerMove === 'paper' && computerMove === 'scissors') {
        winner = 'computer';
    } 
      return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove,computerMove);

        if (winner === 'player') {
            console.log("Player chose " + playerMove + " and computer chose " + computerMove + ". Player wins this round.");
            playerWins++;
        }
        else if (winner === 'computer') {
            console.log("Player chose " + playerMove + " and computer chose " + computerMove + ". Computer wins this round.");
            computerWins++;
        }
        else if (winner === 'tie') {
            console.log("Player chose " + playerMove + " and computer chose " + computerMove + ". This round is a tie.");
        }

        console.log("The score is now " + playerWins + " to " + computerWins + ".");
    }
    return [playerWins, computerWins];
}

