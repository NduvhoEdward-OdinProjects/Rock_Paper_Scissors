console.log("Hellow");
//let userChoice = prompt("Please enter the name of your move: ");
//console.log(userChoice); 

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choiceIndex = Math.floor(Math.random() * 3);
    console.log(choiceIndex);
    return choices[choiceIndex];
}
console.log(getComputerChoice());

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
            } else if (computerSelection == 'Paper') {
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
