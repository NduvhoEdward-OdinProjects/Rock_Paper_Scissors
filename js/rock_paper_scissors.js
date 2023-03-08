// A Rock-Paper-Scissor game 

function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let choiceIndex = Math.floor(Math.random() * 3);
  return choices[choiceIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  let won = 1;
  let tied = 0;
  let lost = -1;

  if (playerSelection === computerSelection) {
    return tied;
}

if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
    ) {
    return won;
}

return lost;
}


let playerWins = 0, 
    playerLoses = 0, 
    ties = 0; 
let roundsSoFar = 0;

const bod = document.querySelector('body');

const matchOutcomes = document.createElement('div');

matchOutcomes.classList.add('scoreBar');

matchOutcomes.textContent = 'Begin!';

bod.appendChild(matchOutcomes);

const buttons = document.querySelectorAll(".player-selections>button");
buttons.forEach((btn) => {

  btn.addEventListener('click', ()=> {
    computerSelection = getComputerChoice();
    playerSelection = btn.id;
    let roundOutcome = playRound(playerSelection, computerSelection); 
    statsUpdate(roundOutcome);
    matchOutcomes.textContent = `Wins: ${playerWins} | Draws: ${ties} | DangIt: ${playerLoses}`;
    roundsSoFar++;
    gameStatus(roundsSoFar);
  }); 

});

function statsUpdate(outCome) {
    if(outCome==1) playerWins++;
    else if (outCome==-1) playerLoses++;
    else ties++;
}

function gameStatus(roundsSoFar) {
    if (roundsSoFar===5) {
        1;
    } 
}


