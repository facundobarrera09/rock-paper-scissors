// HTML elements
const displayScore = document.querySelector(".title p");
const displayDialog = document.querySelector(".hint");

const startButton = document.querySelector(".start-button");
const rockButton = document.querySelector("#button-rock");
const paperButton = document.querySelector("#button-paper");
const scissorsButton = document.querySelector("#button-scissors");

// Game functions

const computerWinDialog = ["HA! I am better than you.", "Is that all you got?"];
const computerLostDialog = ["Pff... You just got lucky.", "You probably looked at the debbugger...", "It was the coder's fault!"];
const computerDrawDialog = ["Just a mishap...", "Well... This isn't fun", "Nothing to see here"];

let points = [0, 0]; //[user-points, computer-points]

function game(userSelection)
{
    // Play the game
    let roundWinner = playRound(computerPlay(), userSelection);
    if (roundWinner === "user")
    {
        points[0]++;
        displayDialog.textContent = computerLostDialog[getRandomInt(0, computerLostDialog.length)];
    }
    else if (roundWinner === "computer")
    {
        points[1]++;
        displayDialog.textContent = computerWinDialog[getRandomInt(0, computerWinDialog.length)];
    }
    else
    {
        displayDialog.textContent = computerDrawDialog[getRandomInt(0, computerDrawDialog.length)];
    }

    displayScore.innerHTML = `Score<br>User:${points[0]} - Computer:${points[1]}`;

    // Check if match ended
    if (points[0] === 5 || points[1] === 5)
    {
        if (points[0] === 5)
            displayScore.textContent = "You win!";
        else
            displayScore.textContent = "You lose!";
       
        startButton.classList.toggle('hidden');
        rockButton.classList.toggle('hidden');
        paperButton.classList.toggle('hidden');
        scissorsButton.classList.toggle('hidden');

        return;
    }
}

function playRound(computerSelection, userSelection)
{
    let winner;

    winner = (computerSelection === userSelection) ? 'draw' :
            (computerSelection === "Rock" && userSelection === "Scissors") ? 'computer' :
            (computerSelection === "Paper" && userSelection === "Rock") ? 'computer' :
            (computerSelection === "Scissors" && userSelection === "Paper") ? 'computer' :
            'user';

    return winner;
}

function computerPlay()
{
    // 1: Rock, 2: Paper, 3: Scissors

    let random = getRandomInt(1,4); // 1 inclusive, 4 exclusive

    return  (random === 1) ? 'Rock' :
            (random === 2) ? 'Paper' :
            (random === 3) ? 'Scissors' :
            undefined;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Event addition
startButton.addEventListener('click', () => {
    startButton.classList.toggle('hidden');
    rockButton.classList.toggle('hidden');
    paperButton.classList.toggle('hidden');
    scissorsButton.classList.toggle('hidden');

    points = [0, 0];

    displayDialog.textContent = "I have made my choice! Your turn...";
});
rockButton.addEventListener('click', () => {
    game("Rock");
});
paperButton.addEventListener('click', () => {
    game("Paper");
});
scissorsButton.addEventListener('click', () => {
    game("Scissors");
});

