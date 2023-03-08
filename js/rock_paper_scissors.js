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

const bod = document.querySelector('body');

const matchOutcomes = document.createElement('div');
const matchComments = document.createElement('div');

matchOutcomes.classList.add('scoreBar');
matchComments.classList.add('matchComments');

function resetScore(){
    playerWins = 0;
    playerLoses = 0;
    ties = 0;
    matchOutcomes.textContent = 'Begin!';
    matchComments.textContent = "You've got this!";
}
resetScore();

bod.appendChild(matchOutcomes);
bod.appendChild(matchComments);

const buttons = document.querySelectorAll(".player-selections>button");
buttons.forEach((btn) => {
  btn.addEventListener('click', playGame); 
});

function playGame(event) {
    computerSelection = getComputerChoice();
    playerSelection = event.target.id;
    let roundOutcome = playRound(playerSelection, computerSelection); 
    statsUpdate(roundOutcome);
    matchOutcomes.textContent = `Wins: ${playerWins} | Draws: ${ties} | DangIt: ${playerLoses}`;
    gameStatus();
}


function statsUpdate(outCome) {
    if(outCome==1) playerWins++;
    else if (outCome==-1) playerLoses++;
    else ties++;
}

function gameStatus(roundsSoFar) {
    if (playerWins==5||playerLoses==5) {
        pauseListeners();
        if (playerWins==5) {
            matchComments.textContent = "Yeyy!";
        } else {
            const machinePhobia = 'The machines are out to get us, ' + 
                                  'they really are, I saw it on TV. This is how it starts.';
            matchComments.textContent = machinePhobia;
        }
    }
}

function pauseListeners() {
    buttons.forEach((btn) => {
        btn.removeEventListener('click', playGame);
    });
}

// Game restart button
const restartBtn = document.createElement('button');
restartBtn.classList.add('restart-btn');
restartBtn.textContent = 'Play Again';

bod.appendChild(restartBtn);

restartBtn.addEventListener('click', restartGame);

function restartGame() {
    resetScore();
    resumeListeners();
}

function resumeListeners() {
    buttons.forEach((btn)=>btn.addEventListener('click',playGame));
}

//__________________________


