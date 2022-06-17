// Declare constants for DOM elements
const playerScore_span = document.getElementById ("player-score");
const computerScore_span = document.getElementById ("computer-score");


const rock_div = document.getElementById ("rock");
const paper_div = document.getElementById ("paper");
const scissors_div = document.getElementById ("scissors");
const lizard_div = document.getElementById ("lizard");
const spock_div = document.getElementById ("spock");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock',];
    const randomChoices = Math.floor(Math.random()*choices.length);
    return choices[randomNumber]
}
(getComputerChoice());

function winner(playerChoice, computerChoice){

}