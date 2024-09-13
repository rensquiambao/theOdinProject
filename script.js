let humanScore = 0;
let computerScore = 0;

const humanScoreElem = document.querySelector("#humanScoreElem");
const computerScoreElem = document.querySelector("#computerScoreElem");
const messageLog = document.querySelector("#message-log");
const humanChoiceimg = document.querySelector("#img-humanChoice");
const computerChoiceImg = document.querySelector("#img-computerChoice");
const buttons = document.querySelectorAll(".img-btn");
const startBtn = document.querySelector("#start-btn");

messageLog.textContent = "ROCK, PAPER, SCISSORS";

buttons.forEach((button) => {
    button.classList.add("disabled");
});

function resetGame() {
    buttons.forEach((button) => {
        button.classList.remove("disabled");
    });

    humanScore = 0;
    computerScore = 0;
    humanScoreElem.textContent = humanScore;
    computerScoreElem.textContent = computerScore;
    messageLog.textContent = "GAME START";
    messageLog.textContent = "Press your choice to start";

    startBtn.disabled = true;
}
startBtn.addEventListener("click", resetGame);

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", () => {
    const humanChoice = "rock";
    const humanChoiceimg = document.querySelector("#img-humanChoice");
    humanChoiceimg.src = "./images/hand rock.png";
    playRound(humanChoice, getComputerChoice());
});

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", () => {
    const humanChoice = "paper";
    const humanChoiceimg = document.querySelector("#img-humanChoice");
    humanChoiceimg.src = "./images/hand-paper.png";
    playRound(humanChoice, getComputerChoice());
});

const btnScsrs = document.querySelector("#btnScsrs");
btnScsrs.addEventListener("click", () => {
    const humanChoice = "scissors";
    const humanChoiceimg = document.querySelector("#img-humanChoice");
    humanChoiceimg.src = "./images/hand scissors.png";
    playRound(humanChoice, getComputerChoice());
});

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
        computerSelection = "rock";
        computerChoiceImg.src = "./images/hand rock.png";
    } else if (computerSelection === 1) {
        computerSelection = "paper";
        computerChoiceImg.src = "./images/hand-paper.png";
    } else if (computerSelection === 2) {
        computerSelection = "scissors";
        computerChoiceImg.src = "./images/hand scissors.png";
    }
    return computerSelection;
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);

    if (humanChoice === computerChoice) {
        messageLog.textContent = "It's a tie. Try Again.";
    } else if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        messageLog.textContent = "You win";
        humanScore++;
        humanScoreElem.textContent = humanScore;
    } else if (
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        messageLog.textContent = "You lose";
        computerScore++;
        computerScoreElem.textContent = computerScore;
    } else {
        messageLog.textContent = "ERROR";
    }
    console.log("Human", humanScore);
    console.log("Computer", computerScore);

    function endGame(winnerMessage) {
        buttons.forEach((button) => {
            button.classList.add("disabled");
        });
        messageLog.textContent = winnerMessage;
        startBtn.disabled = false;
    }

    if (humanScore === 5) {
        endGame("Congratulations! You win!");
    } else if (computerScore === 5) {
        endGame("You lost. Play Again");
    }

    return [humanScore, computerScore];
}
