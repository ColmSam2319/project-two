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
    const randomNumber = Math.floor(Math.random()*choices.length);
    return choices[randomNumber]
}
(getComputerChoice());

/* java for win,lose and draw*/

function win(playerChoice, computerChoice){
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    results_div.innerHTML = 'player wins';
}
function lose(playerChoice, computerChoice){
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    results_div.innerHTML = 'player loses';
}
function draw(playerChoice, computerChoice){
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    results_div.innerHTML = 'draw';
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
                lose(playerChoice, computerChoice);
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

/*eventlisteners for the buttons*/
function main(){
    document.getElementsByTagName('button')[0].addEventListener('click',() => game ("rock"));
    document.getElementsByTagName('button')[1].addEventListener('click',() => game ("paper"));
    document.getElementsByTagName('button')[2].addEventListener('click',() => game ("scissors"));
    document.getElementsByTagName('button')[3].addEventListener('click',() => game ("lizard"));
    document.getElementsByTagName('button')[4].addEventListener('click',() => game ("spock"));

}

main();
function endGame(){
    if(playerScore === 5){
        playerWin();
        playerScore = 0;
        computerScore = 0;
    }
    if(computerScore === 5){
        compWin();
        playerScore = 0;
        computerScore = 0;
    }
}
function compWin(){

}
function playerWin(){

}