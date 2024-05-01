function getHumanChoice() {
  let humanChoice = prompt("Choose rock,paper or scissors");
  return humanChoice.toLowerCase();
}

function getComputerChoice() {
  let computerChoice = ["rock", "paper", "scissors"];
  return computerChoice[Math.floor(Math.random() * 3)];
}

let humanScore = 0;
let computerScore = 0;

// function to play a single round of the Game

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It is a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

// function to play the entire Game(5 rounds)
function playGame() {
  for (i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log(`Game Over. You Won! ${humanScore} : ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`Game Over.You Lose! ${humanScore} : ${computerScore}`);
  } else {
    console.log(`Game Over. It's a tie! ${humanScore} : ${computerScore}`);
  }
}

playGame();
