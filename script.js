
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
    alert(`selection ${playerSelection}`);//-+-+-++-+-+-+-+-+--+-+-+-+-+-+-+-
    play(matches,playerSelection,computerSelection,playerWins,computerWins);
    alert(`selection ${playerSelection}`);//--+-+-++-+-+-+-+-+--+-+-+-+-+-+-+-
}
function toPaper(playerSelection){
    playerSelection="paper";

    play(matches,playerSelection,computerSelection,playerWins,computerWins);
}
function toScissors(playerSelection){
    playerSelection="scissors";
    play(matches,playerSelection,computerSelection,playerWins,computerWins);

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
    document.getElementById("player-wins").textContent=`You won ${playerWins}`;
    document.getElementById("computer-wins").textContent=`Computer won ${computerWins}`;
    document.getElementById("rounds").textContent=`Rounds played: ${matches}/5`;
}

//function to reset the game ------------------------------------
function reset(playerWins,computerWins,matches){
    playerSelection=undefined;
    matches=0;
    playerWins=0;
    computerWins=0;
}
//function to play -------------------------------------
function play(playerSelection,computerSelection,playerWins,computerWins,matches){
    alert(`selection ${playerSelection}`);//--+-+-++-+-+-+-+-+--+-+-+-+-+-+-+-
    if (matches<5){
        alert(`selection ${playerSelection}`);//--+-+-++-+-+-+-+-+--+-+-+-+-+-+-+-
        if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
            alert(`selection ${playerSelection}`);
            matches+=1;
            let computerSelection = randomSelection(selections);
            getWinner(computerSelection,playerSelection);
            printResults(matches,playerSelection,computerSelection,winner,playerWins,computerWins);
        }
        else{
            alert("something went wrong\nPlease try again");
        }
    }
    if (matches==5){
        if (playerWins==computerWins){
            document.getElementById("player").textContent=``;
            document.getElementById("computer").textContent =`The game is a draw`;
            document.getElementById("winner").textContent=`Press reset to play again`;
        }
        else {
            playerWins>computerWins? (console.log("Player wins the game"), alert("Player wins the game\nLet's play once more")): console.log("playing");
            computerWins>playerWins? (console.log("Computer wins the game"),alert("Computer wins the game\nLet's play once more")):console.log("playing");
        }

    }
}