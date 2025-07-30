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

//Step-2: Human Choice

function getHumanChoice(){
    let humanChoice = prompt("Choose one of the following- rock, paper, or scissor:");
    humanChoice = humanChoice.toLowerCase();
    //console.log(typeof humanChoice);
    
    while(true){

        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissor"){
            return humanChoice;
        }
       else{
        humanChoice = prompt("Choose one of the following- rock, paper, or scissor:");
        humanChoice = humanChoice.toLowerCase();
       }
}
}
console.log(getHumanChoice());
//getHumanChoice();
