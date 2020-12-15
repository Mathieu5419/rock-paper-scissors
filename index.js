let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    array = ['rock', 'paper', 'cisor']
    result= (Math.floor(Math.random() * Math.floor(array.length)));
    return (array[result])
}

function playerSelection(){
    let playerChoice= prompt("rock sa paper sa cisor")
    return playerChoice.toLowerCase();
}

function playRound(playerSelection, computerSelection){
    console.log("player: " + playerSelection);
    console.log("computer: " + computerSelection);
    switch (playerSelection) {
        case ('rock'): 
            if (computerSelection == 'cisor') {
                playerScore++
                return "you win";
                
            } else if(computerSelection == 'paper') {
                computerScore++
                return "you lose";
                
            } else{
                return "no winner!";
            }
            break;
        case ('paper'): 
            if (computerSelection == 'cisor') {
                computerScore++
                return "you lose";
            } else if(computerSelection== 'rock') {
                playerScore++
                return "you win";
            } else { 
                return "no winner!";
            }
            break;
        case ('cisor') :
            if (computerSelection == 'paper') {
                playerScore++
                return "you win";
            } else if(computerSelection == 'rock') {
                computerScore++
                return "you lose";
            } else{
                return "no winner";
            }
            break;
    }
}
function game(){
    for (i=1; i<= 5; i++){
    console.log(playRound(playerSelection(), computerPlay()));
    console.log("SCORE: player = " + playerScore +" computer = "  + computerScore);
    }
    tellWinner();
}
function tellWinner(){
    if (playerScore < computerScore) {
        console.log("you lose the game")
    } else {
        console.log("you win the game")
    }
}

game();