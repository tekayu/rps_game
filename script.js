function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
        return 'rock';
        case 1:
        return 'paper';
        case 2:
        return 'scissors';
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Please choose rock, paper, or scissors.');
    console.log(humanChoice)
    return humanChoice;
}

function determineWinner(a, b) {
    if (a == 'rock' && b == 'paper') {
        return false;
    }
    if (a == 'rock' && b == 'scissors') {
        return true;
    }
    if (a == 'paper' && b == 'rock') {
        return false;
    }
    if (a == 'paper' && b == 'scissors') {
        return false;
    }
    if (a == 'scissors' && b == 'paper') {
        return true;
    }
    if (a == 'scissors' && b == 'rock') {
        return false;
    }
}

let playerScore = 0;
let computerScore = 0;

function playRound(computerChoice, button) {
    humanChoice = button.id;
    if (determineWinner(humanChoice, computerChoice) == true) {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
        playerScore++
        console.log(`Current score: Player: ${playerScore}, Computer: ${computerScore}`)
    } else if (determineWinner(humanChoice, computerChoice) == false) {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++
        console.log(`Current score: Player: ${playerScore}, Computer: ${computerScore}`)
    } else {
        console.log('Its a Tie! Go again.')
    }
}

function playGame(computerChoice, button) {
    for (let i = 0; i < 5; i++) {
        playRound(computerChoice, button)
    }
}

const rockBtn = document.createElement("button")
rockBtn.textContent = "Rock";
rockBtn.setAttribute("id", "rock")

const paperBtn = document.createElement("button")
paperBtn.setAttribute("id", "paper")
paperBtn.textContent = "Paper";

const scissorsBtn = document.createElement("button")
scissorsBtn.setAttribute("id", "scissors")
scissorsBtn.textContent = "Scissors";

const body = document.querySelector("body");
body.appendChild(rockBtn);
body.appendChild(paperBtn);
body.appendChild(scissorsBtn);

let computerSelection = getComputerChoice();

rockBtn.addEventListener("click", () => {
    playGame(computerSelection, rockBtn)
    console.log(rockBtn.id);
})

paperBtn.addEventListener("click", () => {
    playGame(computerSelection, paperBtn)
    console.log(paperBtn.id);
})

scissorsBtn.addEventListener("click", () => {
    playGame(computerSelection, scissorsBtn)
    console.log(scissorsBtn.id);
})




