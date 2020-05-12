//computer's play ---------------------------------
const selections = ["rock","paper","scissors"];
let randomSelection = (selections)=> selections[Math.floor(Math.random() * selections.length)];
let printComputerPlay=(computerSelection)=>console.log("the computer plays",computerSelection);


//match function ----------------------------
function match(computerSelection,playerSelection){
        if ((computerSelection=="rock" && playerSelection=="rock") || (computerSelection=="paper" && playerSelection=="paper") || (computerSelection=="scissors" && playerSelection=="scissors")){
            console.log("It's a draw");
        }
        else if ((computerSelection=="rock" && playerSelection=="scissors") || (computerSelection=="paper" && playerSelection=="rock") || (computerSelection=="scissors" && playerSelection=="paper")){
            console.log("Computer wins");
            computerWins+=1;
        }
        else if ((computerSelection=="rock" && playerSelection=="paper") || (computerSelection=="paper" && playerSelection=="scissors") || (computerSelection=="scissors" && playerSelection=="rock")){
            console.log("Player wins");
            playerWins+=1;
        }
        else{
            console.log("I can't detect the winner");
        }
}


//player's play and match -------------------------------------
let matches=0;
let playerWins=0;
let computerWins=0;
function printResult(playerSelection,computerSelection,matches){
    
}

while (true){
    while (matches<5){
    //let computerSelection = randomSelection(selections);
    let computerSelection="rock"; //delete here for final project
    let playerSelection = prompt("write rock, paper or scissors");
    playerSelection=playerSelection.toLowerCase();
    let printPlayerPlay=(playerSelection)=> console.log("you play",playerSelection);

    if  (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        printPlayerPlay(playerSelection);
        printComputerPlay(computerSelection);
        match(computerSelection,playerSelection);
        matches+=1;
        console.log("turs played:",matches,"/ 5");
    }

    else {
        alert("Something went wrong..\nMake sure to write only one word");
    }
}
if (playerWins==computerWins){
    console.log("the game is a draw"), alert("the game is a draw\nLet's play once more");
}
else (playerWins>computerWins) ? (console.log("Player wins the game"), alert("Player wins the game\nLet's play once more")): (console.log("Computer wins the game"),alert("Computer wins the game\nLet's play once more"));

matches=0;
playerWins=0;
computerWins=0;
}