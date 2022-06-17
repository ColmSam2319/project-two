// Declare constants for DOM elements
const playerScore_span = document.getElementById ("player-score");
const computerScore_span = document.getElementById ("computer-score");


const rock_div = document.getElementById ("rock");
const paper_div = document.getElementById ("paper");
const scissors_div = document.getElementById ("scissors");
const lizard_div = document.getElementById ("lizard");
const spock_div = document.getElementById ("spock");
const results_div = document.getElementById ('results')
let playerScore = 0;
let computerScore = 0;

/*java for computer choice*/

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock',];
    const randomChoices = Math.floor(Math.random()*choices.length);
    return choices[randomNumber]
}
(getComputerChoice());

/* java for win,lose and draw*/

function win(playerChoice, computerChoice){
    playerScore++;
}
function lost(playerChoice, computerChoice){
    computerScore++;
}
function draw(playerChoice, computerChoice){
}

/* game java*/

function game(playerChoice){
    const computerChoice = getComputerChoice();
    switch(playerChoice + computerChoice){
        case "rockscissors":
        case "rocklizard":
        case "paperspock":
        case "paperrock":
        case "scissorslizard":
        case "scissorspaper":
        case "lizardpaper":
        case "lizardspock":
        case "spockrock":
        case "spockscissors":
            win(playerChoice, computerChoice);
            break;
            case "rockpaper":
            case "rockspock":
            case "paperscissors":
            case "paperlizard":
            case "lizardscissors":
            case "lizardrock":
            case "scissorsspock":
            case "spocklizard":
                localStorage(playerChoice, computerChoice);
                break;
                case "rockrock":
                case "paperpaper":
                case "scissorsscissors":
                case "lizardlizard":
                case "spockspock":
                    draw(playerChoice, computerChoice);
                    break;             
    }
    endGame()
}