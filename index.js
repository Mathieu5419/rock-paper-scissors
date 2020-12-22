let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('.btn1');
const paperBtn = document.querySelector('.btn2');
const scissorBtn = document.querySelector('.btn3');
const display = document.querySelector('.display');
const computerSelection = computerPlay();

function computerPlay(){
    array = ['rock', 'paper', 'scissor']
    result= (Math.floor(Math.random() * Math.floor(array.length)));
    return (array[result])
}

function playRound(playerSelection, computerSelection){
    
    const playerChoice = document.createElement('p');
    playerChoice.textContent = `Player: ${playerSelection}`;
    display.appendChild(playerChoice);
    const computerChoice = document.createElement('p');
    computerChoice.textContent = `Computer: ${computerSelection}`;
    display.appendChild(computerChoice);
    switch (playerSelection) {
        case ('rock'): 
            if (computerSelection == 'scissor') {
                playerScore++
                
                
            } else if(computerSelection == 'paper') {
                computerScore++
                                
            } else{
                playerScore;
                computerScore;
                
    
            }
            break;
        case ('paper'): 
            if (computerSelection == 'scissor') {
                computerScore++
                
            } else if(computerSelection== 'rock') {
                playerScore++
                
            } else { 
                playerScore;
                computerScore;
                                
            }
            break;
        case ('scissor') :
            if (computerSelection == 'paper') {
                playerScore++
                
            } else if(computerSelection == 'rock') {
                computerScore++
                
            } else{
                playerScore;
                computerScore;
                

            }
            break;
    
    }
    displayScore();
}
function displayScore(){
    const score = document.createElement('p');
    score.textContent = `Player: ${playerScore} Computer: ${computerScore} `;;
    display.appendChild(score);
}
function tellWinner(){
    if (playerScore >= 5) {
        const playerWin = document.createElement('p');
        playerWin.textContent = `You won with a score of : Player: ${playerScore} Computer: ${computerScore} `; 
        display.appendChild(playerWin);
        alert(`You won with a score of : Player: ${playerScore} Computer: ${computerScore} `);
    } else if(computerScore >= 5){
        const computerWin = document.createElement('p');
        computerWin.textContent = `You lose with a score of:  Player: ${playerScore} Computer: ${computerScore} `;
        display.appendChild(computerWin);
        alert(`You lose with a score of:  Player: ${playerScore} Computer: ${computerScore} `)
    }
}

rockBtn.addEventListener('click', function(e){
    playerSelection = 'rock';
    playRound(playerSelection,computerPlay());
    tellWinner();
});
paperBtn.addEventListener('click', function(e){
    playerSelection = 'paper';
    playRound(playerSelection,computerPlay());
    tellWinner();
});
scissorBtn.addEventListener('click', function(e){
    playerSelection = 'scissor';
    playRound(playerSelection,computerPlay());
    tellWinner();
});
