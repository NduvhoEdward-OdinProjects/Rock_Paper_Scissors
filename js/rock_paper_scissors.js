// A Rock-Paper-Scissor game 

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choiceIndex = Math.floor(Math.random() * 3);
    return choices[choiceIndex];
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
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
                return `You loose, ${playerSelection} beats ${computerSelection}`;
            }
            break;
        case 'paper':
            if (computerSelection == 'rock') {
                return `You win, ${playerSelection} beats ${computerSelection}`;
            } else if (computerSelection == 'scissors') {
                return `You loose, ${playerSelection} beats ${computerSelection}`;
            }
            break;
        case 'scissors':
            if (computerSelection == 'paper') {
                return `You win, ${playerSelection} beats ${computerSelection}`;
            } else if (computerSelection == 'rock') {
                return `You loose, ${playerSelection} beats ${computerSelection}`;
            }
            break;
        default:
            break;
    }
}

function game() {
    let playerWins = 0,
        computerWins = 0,
        ties = 0;

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

    console.log(`The player won ${playerWins} times,`);
    console.log(`Lost ${computerWins} times,`);
    console.log(`And tied ${ties} times`);
}

game();