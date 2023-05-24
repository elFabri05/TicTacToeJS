alert("Welcome to the greatest Tic Tac Toe game");
let player1Name = prompt("Which is player 1 name?");
let player2Name = prompt("Which is player 2 name?");

const cells = document.querySelectorAll('.cell');
const title = document.getElementById('playerTurn');


// Players 
function createPlayer(name, symbol) {
  
    const playTurn = (cell) => {
        if (cell.textContent === '') { 
            cell.textContent = currentPlayer.symbol;
            cell.classList.add(`${symbol}`);
            
            currentPlayer = (currentPlayer === player1) ? player2 : player1;
            title.textContent = `It's ${currentPlayer.name}'s turn !`; // doubled
            checkScore();
      }
    };
  
    return {name, symbol, playTurn};
  }

  const player1 = createPlayer(player1Name, "X");
  const player2 = createPlayer(player2Name, "O");
  let currentPlayer = player1;

  title.textContent = `It's ${currentPlayer.name}'s turn !`; // doubled


// Board 
cells.forEach(cell => {
  cell.addEventListener('click', (e) => {
      currentPlayer.playTurn(e.target)

  });
});

// Winner
function checkScore() {
  const winningCombos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  winningCombos.forEach(combo => {
   const won = combo.every(cell =>  cells[cell].classList.contains(currentPlayer.symbol));
    if(won) {
      console.log(`${currentPlayer.name} won!`);
      title.textContent = `${currentPlayer.name} won the game!`;
    }

    })

};

