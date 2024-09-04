function getHumanChoice() {
    humanSelection = prompt("Enter choice: 'rock', 'paper', or 'scissors'");
    humanSelection = humanSelection.toLowerCase();
    return humanSelection;
}

function getComputerChoice() {
    computerSelection = Math.floor(Math.random() * 3);

    if (computerSelection === 0) {
        computerSelection = "rock";
    } else if (computerSelection === 1) {
        computerSelection = "paper";
    } else if (computerSelection === 2) {
        computerSelection = "scissors";
    }
    return computerSelection;
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    console.log("computer", computerSelection);
    console.log("human", humanSelection);

    if (humanChoice === computerChoice) {
        console.log("It's a tie.");
    } else if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
    } else if (
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        computerScore++;
    } else {
        console.log("ERROR");
    }

    return [humanScore, computerScore];
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i < 6; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const playersScores = playRound(
            humanSelection,
            computerSelection,
            humanScore,
            computerScore
        );

        console.log(playersScores);
        humanScore = playersScores[0];
        computerScore = playersScores[1];

        console.log("computerScore", computerScore);
        console.log("humanScore", humanScore);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (computerScore > humanScore) {
        console.log("You lost. You need more pratice.");
    }
}

playGame();
