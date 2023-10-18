let gameIsOver = false;
const buttons = document.querySelectorAll('.tic-tac-toe-move-button');

buttons
  .forEach((buttonElement, index) => {
      buttonElement.addEventListener('click', () => {
        placeMove(buttonElement, index)
      });
    });

function placeMove(button) {
  if (!button.classList.contains('computer-move') && !button.classList.contains('player-move') && !gameIsOver) {
    button.innerHTML = 'X';
    button.classList.add('player-move');
    pickComputerMove();
  }

  checkIfGameOver();
}

function pickComputerMove() {
  checkIfGameOver();
  if (gameIsOver) return;
  
  const randomNum = Math.random();
  let result;

  if (randomNum <= 0.11) {
    result = 1;
  } else if (randomNum > 0.11 && randomNum <= 0.22) {
    result = 2;
  } else if (randomNum > 0.22 && randomNum <= 0.33) {
    result = 3;
  } else if (randomNum > 0.33 && randomNum <= 0.44) {
    result = 4;
  } else if (randomNum > 0.44 && randomNum <= 0.55) {
    result = 5;
  } else if (randomNum > 0.55 && randomNum <= 0.66) {
    result = 6;
  } else if (randomNum > 0.66 && randomNum <= 0.77) {
    result = 7;
  } else if (randomNum > 0.77 && randomNum <= 0.88) {
    result = 8;
  } else if (randomNum > 0.88 && randomNum <= 1) {
    result = 9;
  } 

  const computerMoveButtonClass = `js-tic-tac-toe-move-button-${result}`;
  const buttonElemChoseByComputer = document.querySelector(`.${computerMoveButtonClass}`);

  if (buttonElemChoseByComputer.classList.contains('player-move') || buttonElemChoseByComputer.classList.contains('computer-move')) {
    
    pickComputerMove();
    
  } else {
    buttonElemChoseByComputer.classList.add('computer-move');
    buttonElemChoseByComputer.innerHTML = 'O';
  }
}

function checkIfGameIsWonOrLost() {
  if (
    document.querySelector('.js-tic-tac-toe-move-button-1').classList.contains('player-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-2').classList.contains('player-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-3').classList.contains('player-move')
    ) {
      endGame('You Won!');
      gameIsOver = true;
  } else if (
    document.querySelector('.js-tic-tac-toe-move-button-4').classList.contains('player-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-5').classList.contains('player-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-6').classList.contains('player-move')
  ) {
    endGame('You Won!');
      gameIsOver = true;
  } else if (
    document.querySelector('.js-tic-tac-toe-move-button-7').classList.contains('player-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-8').classList.contains('player-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-9').classList.contains('player-move')
  ) {
    endGame('You Won!');
    gameIsOver = true;
  } else if (
    document.querySelector('.js-tic-tac-toe-move-button-1').classList.contains('player-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-5').classList.contains('player-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-9').classList.contains('player-move')
  ) {
    endGame('You Won!');
    gameIsOver = true;
  } else if (
    document.querySelector('.js-tic-tac-toe-move-button-7').classList.contains('player-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-5').classList.contains('player-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-3').classList.contains('player-move')
  ) {
    endGame('You Won!');
    gameIsOver = true;
  } else if (
    document.querySelector('.js-tic-tac-toe-move-button-1').classList.contains('player-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-4').classList.contains('player-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-7').classList.contains('player-move')
  ) {
    endGame('You Won!');
      gameIsOver = true;
  } else if (
    document.querySelector('.js-tic-tac-toe-move-button-2').classList.contains('player-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-5').classList.contains('player-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-8').classList.contains('player-move')
  ) {
    endGame('You Won!');
    gameIsOver = true;
  } else if (
    document.querySelector('.js-tic-tac-toe-move-button-3').classList.contains('player-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-6').classList.contains('player-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-9').classList.contains('player-move')
  ) {
    endGame('You Won!');
    gameIsOver = true;
  }

  if (
    document.querySelector('.js-tic-tac-toe-move-button-1').classList.contains('computer-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-2').classList.contains('computer-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-3').classList.contains('computer-move')
    ) {
      endGame('You Lose...');
      gameIsOver = true;
  } else if (
    document.querySelector('.js-tic-tac-toe-move-button-4').classList.contains('computer-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-5').classList.contains('computer-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-6').classList.contains('computer-move')
  ) {
    endGame('You Lose...');
      gameIsOver = true;
  } else if (
    document.querySelector('.js-tic-tac-toe-move-button-7').classList.contains('computer-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-8').classList.contains('computer-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-9').classList.contains('computer-move')
  ) {
    endGame('You Lose...');
    gameIsOver = true;
  } else if (
    document.querySelector('.js-tic-tac-toe-move-button-1').classList.contains('computer-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-5').classList.contains('computer-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-9').classList.contains('computer-move')
  ) {
    endGame('You Lose...');
    gameIsOver = true;
  } else if (
    document.querySelector('.js-tic-tac-toe-move-button-7').classList.contains('computer-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-5').classList.contains('computer-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-3').classList.contains('computer-move')
  ) {
    endGame('You Lose...');
    gameIsOver = true;
  } else if (
    document.querySelector('.js-tic-tac-toe-move-button-1').classList.contains('computer-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-4').classList.contains('computer-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-7').classList.contains('computer-move')
  ) {
    endGame('You Lose...');
      gameIsOver = true;
  } else if (
    document.querySelector('.js-tic-tac-toe-move-button-2').classList.contains('computer-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-5').classList.contains('computer-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-8').classList.contains('computer-move')
  ) {
    endGame('You Lose...');
    gameIsOver = true;
  } else if (
    document.querySelector('.js-tic-tac-toe-move-button-3').classList.contains('computer-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-6').classList.contains('computer-move') &&
    document.querySelector('.js-tic-tac-toe-move-button-9').classList.contains('computer-move')
  ) {
    endGame('You Lose...');
    gameIsOver = true;
  }
}

function checkIfGameIsTied() {
  if (gameIsOver) return;

  let buttonsUnavailable = 0;

  buttons.forEach((buttonElement) => {
    if (buttonElement.classList.contains('player-move') || buttonElement.classList.contains('computer-move')) {
      buttonsUnavailable++;
    }
  });

  if (buttonsUnavailable === 9) {
    endGame('Tie.');
    gameIsOver = true;
  }
}


function checkIfGameOver() {
  checkIfGameIsWonOrLost();
  checkIfGameIsTied();
}

function endGame(result) {
  const resultParaElem = document.querySelector('.js-result-of-game');
  const resetButton = '<button class="js-reset-button reset-button">Reset</button>'
  document.querySelector('.js-reset-button-div')
    .innerHTML = resetButton;
  document.querySelector('.js-reset-button')
    .addEventListener('click', resetGame);
  resultParaElem.innerHTML = result;
  buttons.forEach((buttonElement, index) => {
    buttonElement.removeEventListener('click', () => {
      placeMove(buttonElement, index)
    });
  });
}

function resetGame() { 
  const resultParaElem = document.querySelector('.js-result-of-game');

  document.querySelector('.js-reset-button-div')
    .innerHTML = '';
  resultParaElem.innerHTML= '';
  gameIsOver = false;
  buttons
  .forEach((buttonElement, index) => {
      buttonElement.addEventListener('click', () => {
        placeMove(buttonElement, index)
      });
    });
  buttons.forEach((buttonElement) => {
    buttonElement.innerHTML = '';
    if (buttonElement.classList.contains('player-move')) {
      buttonElement.classList.remove('player-move');
    } else if (buttonElement.classList.contains('computer-move')) {
      buttonElement.classList.remove('computer-move');
    }
  })
}