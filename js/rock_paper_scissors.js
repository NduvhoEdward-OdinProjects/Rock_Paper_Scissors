// A Rock-Paper-Scissor game 

function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let choiceIndex = Math.floor(Math.random() * 3);
  return choices[choiceIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Tie";
}

if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
    ) {
    return `You win, ${playerSelection} beats ${computerSelection}`;
}

return `You loose, ${computerSelection} beats ${playerSelection}`;
}


let playerWins = 0,
    computerWins = 0,
    ties = 0; 

const bod = document.querySelector('body');

const matchOutcomes = document.createElement('div');

matchOutcomes.setAttribute('style', 
    'text-align: center; font-size: 40px; color: yellow; padding:24px; margin:24px');

matchOutcomes.textContent = 'Begin!';

bod.appendChild(matchOutcomes);

const buttons = document.querySelectorAll(".player-selections>button");
buttons.forEach((btn) => {

  btn.addEventListener('click', ()=> {
    computerSelection = getComputerChoice();
    playerSelection = btn.id;
    console.log(`${playerSelection}  ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection)); 

    matchOutcomes.textContent = `Wins: ${playerWins} | Draws: ${ties} | DangIt: ${computerWins}`;
  }); 

});



