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


function game() {
  let playerWins = 0,
  computerWins = 0,
  ties = 0;

  /*
for (let i = 0; i < 5; i++) {

  const playerSelection = prompt('Please enter a move of your choice between "Rock" "Paper" and "Scissor": ');
  const computerSelection = getComputerChoice();
  let roundOutcome = playRound(playerSelection, computerSelection);

  if (roundOutcome.includes('win')) {
      playerWins++;
  } else if (roundOutcome.includes('loose')) {
      computerWins++;
  } else if (roundOutcome.includes('Tie')) {
      ties++;
  }
}
*/

  console.log(`The player won ${playerWins} times,`);
  console.log(`Lost ${computerWins} times,`);
  console.log(`And tied ${ties} times`);
}

//game(); 

const buttons = document.querySelectorAll(".player-selections>button");

buttons.forEach((btn) => {

  btn.addEventListener('click', ()=> {
    computerSelection = getComputerChoice();
    playerSelection = btn.id;
    console.log(`${playerSelection}  ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection)); 
  }); 

});

