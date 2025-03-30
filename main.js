/* CASH THE DOM */

// decl/select scores
let compScore = 0;
let playerScore = 0;

// decl score vars to make it show on dom, decl results & container -->  ( _ = DOM variables)
const playerScore_span = document.getElementById('player-score')
const compScore_span = document.getElementById('comp-score');
const container_div = document.querySelector('.container')
const result_div = document.querySelector('.result');

// declare/select choices
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const choice_div = document.querySelector('.choice');

// Create func to get comp choice randomly
function getCompChoice() {
    const options = ["rock", "paper", "scissors"]; // decl options
    const choice = Math.floor(Math.random() * options.length) // make choices random
    return options[choice]; // return options at random
}
// getCompChoice(); - test case

// create functions that run for user wins, losses & draws

function win(playerChoice, compChoice){
    playerScore++; // add 1 to playerScore
    const playerChoice_div = document.getElementById(playerChoice); // animation var
    playerScore_span.textContent = playerScore + ""; // show playerScore on DOM
    compScore_span.textContent = ":" + compScore; // show compScore on DOM 
    result_div.textContent = `You win! Player (${playerChoice}) beats Computer (${compChoice}).`; // show result

    // add animation
    playerChoice_div.classList.add('green-glow');
    setTimeout(function () {
        playerChoice_div.classList.remove('green-glow')
    }, 400);
}

function lose(playerChoice, compChoice){
    compScore++; // add 1 to compScore
    const playerChoice_div = document.getElementById(playerChoice);
    playerScore_span.textContent = playerScore + ""; // show playerScore on DOM
    compScore_span.textContent = ":" + compScore; // show compScore on DOM 
    result_div.textContent = `You lose! Computer (${compChoice}) beats Player (${playerChoice}).`;

    // add animation
    playerChoice_div.classList.add('red-glow');
    setTimeout(function () {
        playerChoice_div.classList.remove('red-glow')
    }, 400);
}


function draw(playerChoice, compChoice){
    const playerChoice_div = document.getElementById(playerChoice);
    playerScore_span.textContent = playerScore + ""; // show playerScore on DOM
    compScore_span.textContent = ":" + compScore; // show compScore on DOM 
    result_div.textContent = `Both picked ${playerChoice}. It's a draw.`;

     // add animation
     playerChoice_div.classList.add('gray-glow');
     setTimeout(function () {
         playerChoice_div.classList.remove('gray-glow')
     }, 400);
 }
 


// create playGame func w conditionals for wins/choices
function playGame(playerChoice){ // when someone picks a choice, compare it to computer hchoice & give us an output
    const compChoice = getCompChoice(); // decl comp choice
        if (playerChoice === "rock" && compChoice === "scissors" || playerChoice === "paper" && compChoice === "rock" || playerChoice === "scissors" && compChoice === "paper"){
        win(playerChoice, compChoice); // run win func
        // console.log(`You win! ${playerChoice} beats ${compChoice}!`) - test
    }else if(playerChoice === "rock" && compChoice === "paper" || playerChoice === "paper" && compChoice === "scissors" || playerChoice === "scissors" && compChoice === "rock"){
        lose(playerChoice, compChoice);
        // console.log(`You lose! ${compChoice} beats ${playerChoice}.`) - test
    }else if(playerChoice === compChoice){
        draw(playerChoice, compChoice);
        // console.log( `It's a draw. Both picked ${playerChoice}.`) - test
    }
}
// console.log(playGame()); - test case



function main(){
// add events
    rock_div.addEventListener('click', () => {
        playGame("rock");
});
    paper.addEventListener('click', () => {
        playGame("paper");

    });

    scissors_div.addEventListener('click', () => {
        playGame("scissors");
    
    });
}
main();


