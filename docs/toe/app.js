const squares = document.querySelectorAll('.square');
const resetButton = document.querySelector('#reset-button');
const xWinsCounter = document.querySelector('.x-wins');
const oWinsCounter = document.querySelector('.o-wins');
const currentTurnDisplay = document.querySelector('#current-turn');

let currentPlayer = 'X';
let xWins = 0;
let oWins = 0;
let gameBoard = ['', '', '', '', '', '', '', '', ''];

function updateBoard(index) {
  gameBoard[index] = currentPlayer;
  squares[index].classList.add(currentPlayer);
  squares[index].textContent = currentPlayer;
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  currentTurnDisplay.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWinner() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let condition of winConditions) {
    const [a, b, c] = condition;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}

function endGame() {
  for (let square of squares) {
    square.removeEventListener('click', handleClick);
  }
  if (currentPlayer === 'X') {
    xWins++;
    xWinsCounter.textContent = xWins;
  } else {
    oWins++;
    oWinsCounter.textContent = oWins;
  }
  currentTurnDisplay.textContent = `Player ${currentPlayer} wins!`;
}

function resetGame() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
    squares[i].classList.remove('X', 'O');
  }
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentTurnDisplay.textContent = `Player ${currentPlayer}'s turn`;
  for (let square of squares) {
    square.addEventListener('click', handleClick, { once: true });
  }
}

function handleClick(event) {
  const clickedSquare = event.target;
  const clickedIndex = clickedSquare.getAttribute('id');
  if (gameBoard[clickedIndex] !== '') {
    return;
  }
  updateBoard(clickedIndex);
  if (checkWinner()) {
    endGame();
    return;
  }
  switchPlayer();
  currentTurnDisplay.textContent = `Player ${currentPlayer}'s turn`;
}

for (let square of squares) {
  square.addEventListener('click', handleClick, { once: true });
}

resetButton.addEventListener('click', resetGame);
