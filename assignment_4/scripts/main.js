const CHOICES = ["rock", "paper", "scissor"]
const TOTAL_GAME_ROUNDS = 5;

function getPlayerInput() {
  let playerSelection = prompt(`Input choice from [${CHOICES}] to play:`).toLowerCase();

  while (!CHOICES.includes(playerSelection)) {
    playerSelection = prompt(`Wrong input.\nInput choice again from [${CHOICES}] to play:`).toLowerCase();
  }

  return playerSelection;
}

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

function outputAndCalculateRoundResult(roundOutput, currentRound, score) {
  switch (roundOutput) {
    case "draw":
      console.log(`Round ${currentRound}: Draw!`);
      break;
    case "player":
      score.playerScore++;
      console.log(`Round ${currentRound}: The player wins this round!`);
      break;
    default:
      score.computerScore++;
      console.log(`Round ${currentRound}: The computer wins this round!`)
  }
}

function outputFinalResult(score) {
  console.log(`Player final score: ${score.playerScore}`);
  console.log(`Computer final score: ${score.computerScore}`);

  if (score.playerScore === score.computerScore) {
    console.log("It is a tie.");
  } else if (score.playerScore > score.computerScore) {
    console.log("The player wins!");
  } else {
    console.log("The computer wins!");
  }
}

function game() {
  let score = {
    playerScore: 0,
    computerScore: 0
  };

  for (let i = 0; i < TOTAL_GAME_ROUNDS; i++) {
    let playerSelection = getPlayerInput();
    let computerSelection = computerPlay();
    console.log();
    console.log(`Player chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`)
    console.log();
    let roundOutput = playRound(playerSelection, computerSelection);
    outputAndCalculateRoundResult(roundOutput, i + 1, score);
    console.log();
    console.log("----------");
    console.log();
  }

  outputFinalResult(score);
}

game();
