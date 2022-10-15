const CHOICES = ["rock", "paper", "scissor"]
const TOTAL_GAME_ROUNDS = 5;

function computerPlay() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "draw";
  } else if (
    ((playerSelection === CHOICES[0]) && (computerSelection === CHOICES[2])) ||
    ((playerSelection === CHOICES[1]) && (computerSelection === CHOICES[0])) ||
    ((playerSelection === CHOICES[2]) && (computerSelection === CHOICES[1]))
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < TOTAL_GAME_ROUNDS; i++) {
    let playerSelection = prompt(`Input choice from [${CHOICES}] to play:`).toLowerCase();

    while (!CHOICES.includes(playerSelection)) {
      playerSelection = prompt(`Wrong input. Input choice again from [${CHOICES}] to play:`).toLowerCase();
    }

    let computerSelection = computerPlay();
    console.log();
    console.log(`Player chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`)
    console.log();
    let roundOutput = playRound(playerSelection, computerSelection);

    switch (roundOutput) {
      case "draw":
        console.log(`Round ${i + 1}: Draw!`);
        break;
      case "player":
        playerScore++;
        console.log(`Round ${i + 1}: The player wins this round!`);
        break;
      default:
        computerScore++;
        console.log(`Round ${i + 1}: The computer wins this round!`)
    }

    console.log();
    console.log("----------");
    console.log();
  }

  console.log(`Player final score: ${playerScore}`);
  console.log(`Computer final score: ${computerScore}`);

  if (playerScore === computerScore) {
    console.log("It is a tie.");
  } else if (playerScore > computerScore) {
    console.log("The player wins!");
  } else {
    console.log("The computer wins!");
  }
}

game();
