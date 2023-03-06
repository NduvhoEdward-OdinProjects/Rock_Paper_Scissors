//let userChoice = prompt("Please enter the name of your move: ");

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choiceIndex = Math.floor(Math.random() * 3);
    return choices[choiceIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return "Tie"
    }
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == 'scissors') {
                return `You win, ${playerSelection} beats ${computerSelection}`;
            } else if (computerSelection == 'paper') {
                return `You lose, ${playerSelection} beats ${computerSelection}`;
            }
            break;
        case 'paper':
            if (computerSelection == 'rock') {
                return `You win, ${playerSelection} beats ${computerSelection}`;
            } else if (computerSelection == 'scissors') {
                return `You lose, ${playerSelection} beats ${computerSelection}`;
            }
            break;
        case 'scissors':
            if (computerSelection == 'paper') {
                return `You win, ${playerSelection} beats ${computerSelection}`;
            } else if (computerSelection == 'rock') {
                return `You lose, ${playerSelection} beats ${computerSelection}`;
            }
            break;
        default:
            break;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice(); 

console.log(playerSelection);
console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));
