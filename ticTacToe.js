/*ask for submission from user of either rock, paper, or scissors assign it to variable playerSelection
	(convert it to all lower case on return so that it’s not case sensitive)*/

let playerSelection = prompt("Pick rock, paper, or scissors");
console.log(playerSelection.toLowerCase());

/*setup an array of [rock, paper, scissors]*/
const cpuOptions = ["rock", "paper", "scissors"];

/*computer randomly chooses from array and assigns it to variable computerSelection*/
computerSelection = cpuOptions[Math.floor(Math.random()*cpuOptions.length)];
console.log(computerSelection);




if ((computerSelection == "rock") && (playerSelection.toLowerCase() == "paper")) {
alert('You win! Paper covers rock!');
}

if ((computerSelection == "rock") && (playerSelection.toLowerCase() == "scissors")) {
alert("You lose! Rock smashes scissors!");
}

if ((computerSelection == "paper") && (playerSelection.toLowerCase() == "scissors")) {
alert("You win! Scissors cut paper!");
}

if ((computerSelection == "paper") && (playerSelection.toLowerCase() == "rock")) {
alert("You lose! Paper covers rock!");
}

if ((computerSelection == "scissors") && (playerSelection.toLowerCase() == "rock")) {
alert("You win! Rock smashes scissors!");
}

if ((computerSelection == "scissors") && (playerSelection.toLowerCase() == "paper")) {
alert("You lose! Scissors cut paper!");
}

else {
    alert("it's a tie");
}