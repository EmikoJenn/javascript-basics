'use strict';

function generateSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function changeMessage(newMessage) {
  document.querySelector('.message').textContent = newMessage;
}

let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;

let guessEl = document.querySelector('.guess');
let scoreEl = document.querySelector('.score');
let highScoreEl = document.querySelector('.highscore');
let numberEl = document.querySelector('.number');
let body = document.querySelector('body');

document.querySelector('.check').addEventListener('click', function () {
  const guess = +guessEl.value;
  if (!guess) {
    changeMessage('😢 no number!');
    return;
  }
  if (score <= 0) return;

  if (guess !== secretNumber) {
    score--;
    scoreEl.textContent = score;
    if (score <= 0) {
      changeMessage('You lost the game');
    } else {
      changeMessage(guess > secretNumber ? 'Too High' : 'Too Low');
    }
  }
  if (guess === secretNumber) {
    numberEl.textContent = secretNumber;
    changeMessage('Correct Number!');
    body.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = generateSecretNumber();
  score = 20;
  numberEl.textContent = '?';
  guessEl.value = '';
  changeMessage('Start guessing...');
  scoreEl.textContent = score;
  body.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
});
