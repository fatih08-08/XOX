let currentPlayer = "X";
let board = ["","","","","","","","",""];

function play(cell, index) {
  if (board[index] !== "") return;

  board[index] = currentPlayer;
  cell.innerText = currentPlayer;

  if (checkWin()) {
    alert(currentPlayer + " kazandı!");
    resetGame();
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWin() {
  const winConditions = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  return winConditions.some(condition =>
    board[condition[0]] &&
    board[condition[0]] === board[condition[1]] &&
    board[condition[1]] === board[condition[2]]
  );
}

function resetGame() {
  board = ["","","","","","","","",""];
  document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
  currentPlayer = "X";
}
