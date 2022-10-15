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
  for (let i = 0; i < TOTAL_GAME_ROUNDS; i++) {
    let playerSelection = prompt(`Input choice from [${CHOICES}]:`).toLowerCase();

    while (!CHOICES.includes(playerSelection)) {
      playerSelection = prompt(`Wrong input. Input choice again from [${CHOICES}]:`).toLowerCase();
    }

    let computerSelection = computerPlay();
    console.log();
    console.log(`Player chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`)
    console.log();
    let roundOutput = playRound(playerSelection, computerSelection);

    if (roundOutput === "draw"){
      console.log("Output: Draw!");
    } else {
      console.log(`Ouput: The ${roundOutput} wins!`)
    }

    if (i < (TOTAL_GAME_ROUNDS - 1)) {
      console.log();
      console.log("----------");
      console.log();
    }
  }
}

game();
