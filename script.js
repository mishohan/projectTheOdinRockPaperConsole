//Rock Paper Scissor in Console


//Step-1: Writing the logic to get Computer Choice

function getComputerChoice(){

    let computerChoice = Math.floor(Math.random()*3) + 1;
    
    if(computerChoice === 1){
        return "rock";
    }
    else if(computerChoice === 2){
        return "paper";
    }
    else{
        return "scissors";
    }

}

//console.log(getComputerChoice()); 
// //This will return one of the: "rock", "paper", "scissor"
getComputerChoice();