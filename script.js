'use strict';

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

let secretNumber = Math.trunc(Math.random() * 25 + 1);
let score = 20;
let highScore = 0;
// document.querySelector('.secrtNumber').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number entered';
    displayMessage('NO number entered');
  } else if (guess < 0) {
    // document.querySelector('.message').textContent = 'Not Valid';
    displayMessage('Not a valid');
  } else if (guess > 25) {
    displayMessage('Not a valid');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Your win the game';
    displayMessage('You win the game');
    document.querySelector('.secrtNumber').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#607274';
    document.querySelector('.gameplace').style.boxShadow =
      '#000 0px 7px 29px 0px';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High Guess' : 'Too Low Guess');
      score--;
      document.querySelector('.tries').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost Game';
      displayMessage('You lost Game');
      document.querySelector('.tries').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 25 + 1);
  document.querySelector('.secrtNumber').textContent = '?';
  document.querySelector('.tries').textContent = score;
  // document.querySelector('.message').textContent = 'Start Guessing ';
  displayMessage('Start Guessing');
  document.querySelector('body').style.backgroundColor = '#000';
  document.querySelector('.guess').value = '0';
  document.querySelector('.gameplace').style.boxShadow = '#ffffff 2px 3px 25px 0px';
});
