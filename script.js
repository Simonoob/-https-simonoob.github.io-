
//variables ------------------------------
let matches=0;
let playerWins=0;
let computerWins=0;
let playerSelection=undefined;
let computerSelection=undefined;
let winner=undefined;

//computer's selection ---------------------------------
const selections = ["rock","paper","scissors"];
let randomSelection = (selections)=> selections[Math.floor(Math.random() * selections.length)];

//player's selection + match function call -------------------------------------
function toRock(playerSelection){
    playerSelection="rock";
    let computerSelection = randomSelection(selections);
    matches+=1;
    play(matches,playerSelection,computerSelection,playerWins,computerWins);
    printResults(matches,playerSelection,computerSelection,winner,playerWins,computerWins);
}
function toPaper(playerSelection){
    playerSelection="paper";
    let computerSelection = randomSelection(selections);
    matches+=1;
    play(matches,playerSelection,computerSelection,playerWins,computerWins);
    printResults(matches,playerSelection,computerSelection,winner,playerWins,computerWins);
}
function toScissors(playerSelection){
    playerSelection="scissors";
    let computerSelection = randomSelection(selections);
    matches+=1;
    play(matches,playerSelection,computerSelection,playerWins,computerWins);
    printResults(matches,playerSelection,computerSelection,winner,playerWins,computerWins);
}

//functions defining winner and printing results ----------------------------
function getWinner(computerSelection,playerSelection){
        if ((computerSelection=="rock" && playerSelection=="rock") || (computerSelection=="paper" && playerSelection=="paper") || (computerSelection=="scissors" && playerSelection=="scissors")){
            winner="Draw";
        }
        else if ((computerSelection=="rock" && playerSelection=="scissors") || (computerSelection=="paper" && playerSelection=="rock") || (computerSelection=="scissors" && playerSelection=="paper")){
            winner="Computer wins";
            computerWins+=1;
        }
        else if ((computerSelection=="rock" && playerSelection=="paper") || (computerSelection=="paper" && playerSelection=="scissors") || (computerSelection=="scissors" && playerSelection=="rock")){
            winner="You win";
            playerWins+=1;
        }
}
function printResults(matches,playerSelection,computerSelection,winner,playerWins,computerWins){
    document.getElementById("player").textContent=`You play ${playerSelection}`;
    document.getElementById("computer").textContent =`The computer plays ${computerSelection}`;
    document.getElementById("winner").textContent=winner;
    document.getElementById("player-wins").textContent=`You won ${playerWins} rounds`;
    document.getElementById("computer-wins").textContent=`Computer won ${computerWins} rounds`;
    document.getElementById("rounds").textContent=`Rounds played: ${matches}/5`;
}

//function to reset the game ------------------------------------
function reset(){
    playerWins=0;
    computerWins=0;
    matches=0;
    printResults(matches,playerSelection,computerSelection,winner,playerWins,computerWins);
    document.getElementById("player").textContent=``;
    document.getElementById("computer").textContent =`Click on one of the images to play`;
    document.getElementById("winner").textContent="";
    document.getElementById("results").style.background="rgba(126, 183, 214, 0.7)";
    document.getElementById("results").style.position="relative";
    document.getElementById("results").style.top="0rem";
    document.getElementById("results").style.color="black";
       document.getElementById("results").style.border="7px solid black";

}
//function to play -------------------------------------
function play(matches,playerSelection,computerSelection,playerWins,computerWins){
    if (matches<5){
        if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
            document.getElementById("rounds").textContent=`Rounds played: ${matches}/5`;
            getWinner(computerSelection,playerSelection);
        }
        else{
            alert("something went wrong\nPlease try again");
        }
    }

    if (matches==5){
       document.getElementById("results").style.background="linear-gradient(rgb(5, 151, 227),rgb(251, 163, 236))";
       document.getElementById("results").style.color="white";
       document.getElementById("results").style.border="7px solid white";
       document.getElementById("results").style.position="relative";
       document.getElementById("results").style.top="-19rem";
        if (playerWins==computerWins){
            document.getElementById("player").textContent=``;
            document.getElementById("computer").textContent =`The game is a draw`;
            document.getElementById("winner").textContent=`Press reset to play again`;
        }
        else {
            playerWins>computerWins? (console.log("Player wins the game"), winner="Player wins the game"): console.log();
            computerWins>playerWins? (console.log("Computer wins the game"),winner="Computer wins the game"):console.log();
        }
    }
}
    