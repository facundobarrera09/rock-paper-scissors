function game()
{
    let computerPoints = 0, userPoints = 0;
    let computerSelection = "", userSelection = "";
    let winner;

    console.log("The game is starting!");

    // 5 round game
    /* for (let round = 1; round <= 5; round++)
    {
        console.log(`Round ${round}:`);

        computerSelection = computerPlay();
        userSelection = userPlay();

        if (userSelection === "cancel")
        {
            console.log("User ended the game :(");
            return;
        }

        winner = playRound(computerSelection, userSelection);

        if (winner === "draw")
        {
            userPoints++;
            computerPoints++;
            console.log("It's a draw! Point for everyone :)");
        }
        else if (winner === "user")
        {
            userPoints++;
            console.log(`You win! ${userSelection} beats ${computerSelection}`);
        }
        else
        {
            computerPoints++;
            console.log(`You lose! ${computerSelection} beats ${userSelection}`);
        }
    } */

    console.log(`The game ended! Points:\n\nUser: ${userPoints}\nComputer: ${computerPoints}`);
    console.log((computerPoints === userPoints) ? "It's a draw!" :
                (computerPoints > userPoints) ? "The computer wins!" : "The user wins!");
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

function userPlay()
{
    let userSelection;

    while (true)
    {
        userSelection = prompt("Select rock, paper, or scissors:");

        if (userSelection === null)
            return "cancel";

        userSelection = userSelection.toLowerCase();
        if (!(userSelection === 'rock' || userSelection === 'paper' || userSelection === 'scissors'))
            console.log("The selected value should be rock, paper, or scissors! Try again.");
        else
        {
            userSelection = userSelection.charAt(0).toUpperCase() + (userSelection.slice(1));
            return userSelection;
        }
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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let button = document.querySelector(".start-button");
button.addEventListener('click', game);