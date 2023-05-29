
const options = [ "rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor (Math.random() * options.length)]
    return choice;

}



function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie"
    }
 
else if (
        (playerSelection == "rock" && computerSelection == "scissors")||
        (playerSelection == "scissors" && computerSelection == "paper")||
        (playerSelection == "paper" && computerSelection == "rock")
){
    return "Player";
}
    else
{
        "Computer"
    }



}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if( result == "Tie"){
        return "its a tie"
    }

    else if (result== "Player"){
        return `you win ${playerSelection} beats ${computerSelection}` 
    }

    else {
        return `you lose ${computerSelection} beats ${playerSelection}` 
    }

}


function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput== false){
        const choice = prompt ("Rock,Paper,Scissors");
        if (choice == null){
           continue;
    }
    const choiceinLowerCase = choice.toLowerCase();
    if (options.includes(choiceinLowerCase)){
        validatedInput=true;
        return choiceinLowerCase;
    }   
}

}


function game(){

    let scorePlayer = 0;
    let scoreComputer =0;
    console.log ("GAME TIME!!")


    for ( let i=0; i<5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
        if (checkWinner(playerSelection, computerSelection) == "Player"){
        scorePlayer++;
        } 
    else if (checkWinner(playerSelection,computerSelection) == computerSelection);{
        scoreComputer++;
    }


    console.log("Game Over")
    if(scorePlayer > scoreComputer){
        console.log("Player was the winner");
    }
    else if (scorePlayer<scoreComputer){
        console.log("Computer was the winner");

    }
    else {
        console.log("TIE!");
    }

    }

}

game();
