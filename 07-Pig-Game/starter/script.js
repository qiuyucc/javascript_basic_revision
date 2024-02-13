const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const btnNewGam = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const score0 = document.querySelector('#score--0');
const current0El = document.getElementById('current--0');
const score1 = document.querySelector('#score--1');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');

score0.textContent = 0;
score1.textContent = 0;
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const generateDice = function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
};

btnRoll.addEventListener('click', generateDice);


btnHold.addEventListener('click', function(){
    // 1. add current score to active player's score
})