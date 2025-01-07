// Card array
const cardarray = [
    { name: 'fries', image: 'images/fries.png' },
    { name: 'cheeseburger', image: 'images/cheeseburger.png' },
    { name: 'hotdog', image: 'images/hotdog.png' },
    { name: 'ice cream', image: 'images/ice-cream.png' },
    { name: 'milkshake', image: 'images/milkshake.png' },
    { name: 'pizza', image: 'images/pizza.png' },
    { name: 'fries', image: 'images/fries.png' },
    { name: 'cheeseburger', image: 'images/cheeseburger.png' },
    { name: 'hotdog', image: 'images/hotdog.png' },
    { name: 'ice cream', image: 'images/ice-cream.png' },
    { name: 'milkshake', image: 'images/milkshake.png' },
    { name: 'pizza', image: 'images/pizza.png' },
];

// Shuffle cards
cardarray.sort(() => 0.5 - Math.random());

const griddisplay = document.querySelector('#grid');
const resultdisplay = document.querySelector('#result');
const resetbutton = document.querySelector('#reset');
let cardschosen = [];
let cardschosenid = [];
const cardswon = [];

// Create the game board
function createboard() {
    griddisplay.innerHTML = ''; // Clear existing grid
    for (let i = 0; i < cardarray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.classList.add('card');
        card.addEventListener('click', flipcard);
        griddisplay.append(card);
    }
}

// Check for matches
function checkmatch() {
    const cards = document.querySelectorAll('img');
    const optiononeid = cardschosenid[0];
    const optiontwoid = cardschosenid[1];

    if (optiononeid === optiontwoid) {
        alert('You have clicked the same image!');
        cards[optiononeid].setAttribute('src', 'images/blank.png');
    } else if (cardschosen[0] === cardschosen[1]) {
        alert('You found a match!');
        cards[optiononeid].setAttribute('src', 'images/white.png');
        cards[optiontwoid].setAttribute('src', 'images/white.png');
        cards[optiononeid].removeEventListener('click', flipcard);
        cards[optiontwoid].removeEventListener('click', flipcard);
        cardswon.push(cardschosen);
    } else {
        cards[optiononeid].setAttribute('src', 'images/blank.png');
        cards[optiontwoid].setAttribute('src', 'images/blank.png');
        // alert('Sorry, try again!');
    }

    cardschosen = [];
    cardschosenid = [];
    resultdisplay.textContent = cardswon.length;

    if (cardswon.length === cardarray.length / 2) {
        resultdisplay.textContent = 'Congratulations! You found all the matches!';
    }
}

// Flip the card
function flipcard() {
    const cardid = this.getAttribute('data-id');
    cardschosen.push(cardarray[cardid].name);
    cardschosenid.push(cardid);
    this.setAttribute('src', cardarray[cardid].image);

    if (cardschosen.length === 2) {
        setTimeout(checkmatch, 500);
    }
}

// Reset the game
resetbutton.addEventListener('click', () => {
    cardswon.length = 0; // Reset matches
    resultdisplay.textContent = 0; // Reset score
    cardarray.sort(() => 0.5 - Math.random()); // Reshuffle cards
    createboard(); // Recreate the board
});

// Initialize the game
createboard();
