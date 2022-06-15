// Declare constants for DOM elements
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const result_div = document.querySelector("#result");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");
let playerScore = 0;
let computerScore = 0;
const resetButton = document.getElementById("reset-button");

/**
 * Lists the choices
 * and generates the computer choice by using a random number from the array of choices
 */  
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber =Math.floor(Math.random()*choices.length);
    return choices[randomNumber];
}
// Gets computer choice
(getComputerChoice());

// Capitalises each word in the result section
function capitaliseWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Finds the player score and increments it
 * inserts the result string into the result section
 * adds CSS styling to the icons once cliced
 * removes the styling
 */
function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${capitaliseWord(playerChoice)}  beats ${capitaliseWord(computerChoice)}. You win!`;
    document.getElementById(playerChoice).classList.add('winner');
    setTimeout(function() {document.getElementById(playerChoice).classList.remove('winner'); }, 200);
}

/**
 * Finds the computer score and increments it
 * inserts the result string into the result section
 * adds CSS styling to the icons once cliced
 * removes the styling
 */
function lose(playerChoice, computerChoice) {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${capitaliseWord(playerChoice)}  loses to ${capitaliseWord(computerChoice)}. You lost!`;
    document.getElementById(playerChoice).classList.add('loser');
    setTimeout(function() {document.getElementById(playerChoice).classList.remove('loser'); }, 200);
}
// Maintains the score and displays a string in the result
function draw(playerChoice, computerChoice) {
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${capitaliseWord(playerChoice)} is the same as ${capitaliseWord(computerChoice)}. It's a draw!!`;
    document.getElementById(playerChoice).classList.add('draw');
    setTimeout(function() {document.getElementById(playerChoice).classList.remove('draw'); }, 200);
}

// Compares the all of the possible combinations and gives back either win lose or draw
function game(playerChoice) {
    const computerChoice = getComputerChoice();
    switch(playerChoice + computerChoice) {
        case "rockscissors":
        case "rocklizard":
        case "paperspock":
        case "paperrock":
        case "scissorslizard":
        case "scissorspaper":
        case "spockrock":
        case "spockscissors":
        case "lizardpaper":
        case "lizardspock":
            win(playerChoice, computerChoice);
            break;
        case "rockpaper":
        case "rockspock":
        case "paperscissors":
        case "paperlizard":
        case "scissorsrock":
        case "scissorsspock":
        case "spockpaper":
        case "spocklizard":
        case "lizardscissors":
        case "lizardrock":
            lose(playerChoice, computerChoice);
            break;
        case "paperpaper":
        case "scissorsscissors":
        case "rockrock":
        case "spockspock":
        case "lizardlizard":
            draw(playerChoice, computerChoice);
            break;
    }
    endGame();
}

// Add event listeners to all icons
function main() {
   rock_div.addEventListener('click', () => game("rock"));

    paper_div.addEventListener('click', () => game("paper"));

    scissors_div.addEventListener('click', () => game("scissors"));

    lizard_div.addEventListener('click', () => game("lizard"));

    spock_div.addEventListener('click', () => game("spock"));
    
}
main();

// Gives the game and end when either the user or computer gets to 10 points
function endGame() {
    if (playerScore === 10){
        playerWin();
        playerScore = 0;
        computerScore = 0; 
    }
    if (computerScore === 10){
        compWin();
        playerScore = 0;
        computerScore = 0;
        
    }
}

