//Rock Paper Scissor in Console


//Step-1: Computer Choice

function getComputerChoice(){

    let computerChoices = Math.floor(Math.random()*3) + 1;
    
    if(computerChoices === 1){
        return "rock";
    }
    else if(computerChoices === 2){
        return "paper";
    }
    else if(computerChoices === 3){
        return "scissor";
    }
 }

//Step-2: Human Choice

function getHumanChoice(){

        let input;
        let validInput = false;

    while(!validInput){
        input = prompt("Choose one of the following- rock, paper, or scissor:").toLowerCase();

        if( input === "rock" || input === "paper" || input === "scissor"){
            validInput = true;
            return input;
        }
      }
    }

//Step-3: Score variables

let humanScore = 0;
let computerScore = 0;
let round = 0;
let tie = 0;

//Step-4: Playing a single round

function playRound(humanChoice, computerChoice){
    
        if(computerChoice === "paper" && humanChoice === "rock" ||
            computerChoice === "scissor" && humanChoice === "paper" ||
            computerChoice === "rock" && humanChoice === "scissor"){

        computerScore++;

        console.log(`Computer Choose: ${computerChoice},    You Choose: ${humanChoice}.`)

        console.log(`You loss: 
                    Computer score: ${computerScore}, 
                    Your Score: ${humanScore}, 
                    Tie: ${tie}, 
                    Round: ${round}.`);
    }

    else if(computerChoice == humanChoice){

        tie++;

        console.log(`Computer Choose: ${computerChoice},    You Choose: ${humanChoice}.`);

        console.log(`It's a tie. 
                    Computer score: ${computerScore}, 
                    Your Score: ${humanScore}, 
                    Tie: ${tie}, 
                    Round: ${round}.`);
    }

    else{

        humanScore++;

        console.log(`Computer Choose: ${computerChoice},    You Choose: ${humanChoice}.`);

        console.log(`You win: 
                    Computer score: ${computerScore}, 
                    Your Score: ${humanScore}, 
                    Tie: ${tie}, 
                    Round: ${round}.`);
        }
    }

//Step-5: Playing for 5 times

function playGame(){

        for(let i = 1; i<=5; i++){

        round++;

        playRound(getHumanChoice(), getComputerChoice());

    }
}
    
playGame();

//Step-6: Determining winner

if(humanScore > computerScore){
    console.log("Final Score: Congratulation! You won the match.");
}
else if(humanScore === computerScore){
    console.log("Final Score: It's a tie.");
}
else{
    console.log("Final Score: Sorry, You lost.");
}