let humanScore = 0;
let computerScore = 0;

const humanScoreElem = document.querySelector("#humanScoreElem");
const computerScoreElem = document.querySelector("#computerScoreElem");
const winnerAnnouncer = document.querySelector("#winnerAnnouncer");
const buttons = document.querySelectorAll(".img-btn");

winnerAnnouncer.textContent = "PRESS CHOICE TO START";

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", () => {
    const humanChoice = "rock";
    playRound(humanChoice, getComputerChoice());
});

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", () => {
    const humanChoice = "paper";
    playRound(humanChoice, getComputerChoice());
});

const btnScsrs = document.querySelector("#btnScsrs");
btnScsrs.addEventListener("click", () => {
    const humanChoice = "scissors";
    playRound(humanChoice, getComputerChoice());
});

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

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);

    if (humanChoice === computerChoice) {
        winnerAnnouncer.textContent = "It's a tie. Try Again.";
    } else if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        winnerAnnouncer.textContent = "You win";
        humanScore++;
        humanScoreElem.textContent = humanScore;
    } else if (
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        winnerAnnouncer.textContent = "You lose";
        computerScore++;
        computerScoreElem.textContent = computerScore;
    } else {
        winnerAnnouncer.textContent = "ERROR";
    }
    console.log("Human", humanScore);
    console.log("Computer", computerScore);

    function endGame(winnerMessage) {
        buttons.forEach((button) => {
            button.disabled = true;
        });
        winnerAnnouncer.textContent = winnerMessage;
    }

    if (humanScore === 5) {
        endGame("Congratulations! You win the game!");
    } else if (computerScore === 5) {
        endGame("You lost. Play Again");
    }

    return [humanScore, computerScore];
}
