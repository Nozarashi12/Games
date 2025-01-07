const computerchoicedisplay = document.getElementById("computerchoice");
const userchoicedisplay = document.getElementById("userchoice");
const resultdisplay = document.getElementById("result");
const userScoreDisplay = document.getElementById("userScore");
const computerScoreDisplay = document.getElementById("computerScore");
const possiblechoices = document.querySelectorAll("button");
const resetButton = document.querySelector("button"); 

let Userchoice;
let computerchoice;
let result;
let userScore = 0; 
let computerScore = 0; 

possiblechoices.forEach(choice => 
  choice.addEventListener('click', (e) => {
    Userchoice = e.target.id;
    userchoicedisplay.innerHTML = Userchoice;
    generatecomputerchoice();
    displayresult();
  })
);

function generatecomputerchoice() {
    const randomnumber = Math.floor(Math.random() * 3) + 1;

    if (randomnumber === 3) {
        computerchoice = 'rock';
    }
    if (randomnumber === 2) {
        computerchoice = 'paper';
    }
    if (randomnumber === 1) {
        computerchoice = 'scissor';
    }

    computerchoicedisplay.innerHTML = computerchoice;
}

function displayresult() {
    if (computerchoice === Userchoice) {
        result = "It's a tie!";
    }
    if (computerchoice === 'rock' && Userchoice === 'paper') {
        result = "You Win!";
        userScore++; 
    }
    if (computerchoice === 'rock' && Userchoice === 'scissor') {
        result = "You Lose!";
        computerScore++; 
    }
    if (computerchoice === 'paper' && Userchoice === 'rock') {
        result = "You Lose!";
        computerScore++; 
    }
    if (computerchoice === 'paper' && Userchoice === 'scissor') {
        result = "You Win!";
        userScore++; 
    }
    if (computerchoice === 'scissor' && Userchoice === 'rock') {
        result = "You Win!";
        userScore++; 
    }
    if (computerchoice === 'scissor' && Userchoice === 'paper') {
        result = "You Lose!";
        computerScore++;
    }

    resultdisplay.innerHTML = result;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
}

resetButton.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    Userchoice = '';
    computerchoice = '';
    result = '';

    userchoicedisplay.innerHTML = '';
    computerchoicedisplay.innerHTML = '';
    resultdisplay.innerHTML = '';
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
});
