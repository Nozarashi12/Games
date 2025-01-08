const squares = document.querySelectorAll('.square');
const timeLeftDisplay = document.querySelector('#time-left');
const scoreDisplay = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60; // Timer set to 60 seconds
let timerId = null;
let moleTimerId = null;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    });

    let randomIndex = Math.floor(Math.random() * 9);
    let randomSquare = squares[randomIndex];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id === hitPosition) {
            result++;
            scoreDisplay.textContent = result;
            hitPosition = null;
        }
    });
});

function moveMole() {
    moleTimerId = setInterval(randomSquare, 1000); // Mole changes position every second
}

function countDown() {
    currentTime--;
    timeLeftDisplay.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(timerId); // Stop the countdown
        clearInterval(moleTimerId); // Stop moving the mole
        alert(`Game over! Your final score is ${result}.`);

        // Reset game
        result = 0;
        currentTime = 60;
        scoreDisplay.textContent = result;
        timeLeftDisplay.textContent = currentTime;
        randomSquare(); // Reset the mole position
        moveMole(); // Restart the mole movement
        timerId = setInterval(countDown, 1000); // Restart the countdown
    }
}

// Start the game
moveMole();
timerId = setInterval(countDown, 1000);
