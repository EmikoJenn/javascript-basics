'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

function switchPlayer() {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
  if (scores[activePlayer] >= 100) return;
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice === 1) {
    switchPlayer();
    return;
  }

  currentScore += dice;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
});

btnHold.addEventListener('click', function () {
  if (scores[activePlayer] >= 100) return;
  const activePlayerEl = document.querySelector(`.player--${activePlayer}`);

  scores[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] < 100) {
    switchPlayer();
    return;
  }

  activePlayerEl.classList.remove('player--active');
  activePlayerEl.classList.add('player--winner');
  diceEl.src = 'dice-6.png';
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
});

btnNew.addEventListener('click', function () {
  const activePlayerEl = document.querySelector(`.player--${activePlayer}`);
  if (activePlayerEl.classList.contains('player--winner')) {
    activePlayerEl.classList.remove('player--winner');
    player0El.classList.add('player--active');
  } else if (activePlayer === 1) {
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = currentScore;
  current1El.textContent = currentScore;
  diceEl.classList.add('hidden');
});
