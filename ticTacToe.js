
let playerScore = 0;
let computerScore = 0;
   
   
const playRound = (computerSelection, playerSelection) => {

//ask for submission from user of either rock, paper, or scissors assign it to variable playerSelection
let playerSelectionAny = prompt("Pick rock, paper, or scissors");
//(convert it to all lower case on return so that it’s not case sensitive)
playerSelection = playerSelectionAny.toLowerCase();
console.log(playerSelection);
        
/*setup an array of [rock, paper, scissors]*/
const cpuOptions = ["rock", "paper", "scissors"];
        
/*computer randomly chooses from array and assigns it to variable computerSelection*/
computerSelection = cpuOptions[Math.floor(Math.random()*cpuOptions.length)];
console.log(computerSelection);


    if ((computerSelection == "rock") && (playerSelection == "paper")) {
        alert("You win! Paper covers rock!")
        return playerScore += 1;
        } 

    else if ((computerSelection == "rock") && (playerSelection == "scissors")) {
        alert("You lose! Rock smashes scissors!");
        return computerScore += 1;
        }

    else if ((computerSelection == "paper") && (playerSelection == "scissors")) {
        alert("You win! Scissors cut paper!");
        return playerScore += 1;
        }

    else if ((computerSelection == "paper") && (playerSelection == "rock")) {
        alert("You lose! Paper covers rock!");
        return computerScore += 1;
        }
        
    else if ((computerSelection == "scissors") && (playerSelection == "rock")) {
        alert("You win! Rock smashes scissors!");
        return playerScore += 1;
        }

    else if ((computerSelection == "scissors") && (playerSelection == "paper")) {
        alert("You lose! Scissors cut paper!");
        return computerScore +=1
        }
        

    else if (computerSelection == playerSelection) {
            alert("it's a tie");
            return playerScore = playerScore
        }

    else {
            alert("pick a valid option, you nitwit!")
        }

        /*alert the player of the results*/
        alert(playRound(computerSelection, playerSelection)); 
        console.log(playerScore, computerScore);

        }
     
    
     
        
const playGame = () => {
    for (let i=0; i<5; i++) {
        playRound();
    }
    alert(playerScore + ":" + computerScore);
}   

playGame();

