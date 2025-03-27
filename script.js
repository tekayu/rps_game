function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
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
    const humanChoice = prompt('Please choose rock, paper, or scissors.');
    console.log(humanChoice)
    return humanChoice;
}

getHumanChoice();