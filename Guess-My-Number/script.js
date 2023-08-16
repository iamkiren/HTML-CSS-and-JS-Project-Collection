'use strict';

let highScore = 0;
let score = 20;

let secretNumber = Math.trunc(Math.random() * 20 + 1);

function message(msg) {
  document.querySelector('.message').textContent = msg;
  document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
  const currentNumber = Number(document.querySelector('.guess').value);

  if (!currentNumber) {
    message('❌No Number');
  } else if (currentNumber !== secretNumber && score >= 1) {
    score--;
    currentNumber > secretNumber
      ? message('⬆️ Too High')
      : message('⬇️ Too Low');
  } else if (currentNumber === secretNumber) {
    message('🎉 Correct Number');
    document.body.style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    message('💥You Lost');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.body.style.backgroundColor = 'black';

  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  message('Start guessing...');
});
