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

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    var move;
    if (move !0) {
        return move;
    } else {
        return getInput();
    }
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move; /* Your Expression */;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    var move;
    if (move !0) {
        return move;
    } else {
        return randomPlay()
    }

    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move;/* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove ="Rock"&&computerMove ="Scissors") {
        winner = player
    } else if (playermove = "Rock"&&computerMove ="Paper") {
        winner = player
    }   else if (playermove = "Paper"&&computerMove = "Rock") {
        winner = player
    }   else if (playermove = "Paper"&&computerMove = "Scissors") {
        winner = computer {
            else if (playerMove = "Paper"&&computerMove = "Rock") {
                winner = player
    }   else if (playermove = "scissors"&&computerMove = "Rock") {
                winner = computer
    }

    
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    for (i=5; (playerWins<i)||(computerWins<i); i+=0)

    if (winner === player) {
        playerwins++;
    } else if (winner ===computer) {
        computerWins++;
    }
      return null;
    }


    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}
/*/*

