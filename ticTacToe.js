/*ask for submission from user of either rock, paper, or scissors assign it to variable playerSelection
	(convert it to all lower case on return so that it’s not case sensitive)*/

let playerSelectionAny = prompt("Pick rock, paper, or scissors");
let playerSelection = playerSelectionAny.toLowerCase();
console.log(playerSelection);

/*setup an array of [rock, paper, scissors]*/
const cpuOptions = ["rock", "paper", "scissors"];

/*computer randomly chooses from array and assigns it to variable computerSelection*/
computerSelection = cpuOptions[Math.floor(Math.random()*cpuOptions.length)];
console.log(computerSelection);


function playRound(computerSelection, playerSelection) {

if ((computerSelection == "rock") && (playerSelection == "paper")) {
return "You win! Paper covers rock!"
}

if ((computerSelection == "rock") && (playerSelection == "scissors")) {
return("You lose! Rock smashes scissors!");
}

if ((computerSelection == "paper") && (playerSelection == "scissors")) {
return("You win! Scissors cut paper!");
}

if ((computerSelection == "paper") && (playerSelection == "rock")) {
return("You lose! Paper covers rock!");
}

if ((computerSelection == "scissors") && (playerSelection == "rock")) {
return("You win! Rock smashes scissors!");
}

if ((computerSelection == "scissors") && (playerSelection == "paper")) {
return("You lose! Scissors cut paper!");
}

if (computerSelection == playerSelection) {
    return("it's a tie");
}
}
/*alert the player of the results*/
alert(playRound(computerSelection, playerSelection));