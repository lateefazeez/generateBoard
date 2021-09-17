const generateBoard = function(firstQueen, secondQueen) {
  let board = [];
  for (let i = 0; i < 8; i++) {
    let row = [];
    for (let j = 0; j < 8; j++) {
      if ((firstQueen[0] === i && firstQueen[1] === j) || (secondQueen[0] === i && secondQueen[1] === j)) {
        row[j] = 1;
      } else row[j] = 0;
    }
    board[i] = row;
  }
  return board;
};

const queenThreat = function(board) {
  let queenOne;
  let queenTwo;
  let result;
  for (let i = 0; i < board.length; i++) {
    if (!queenOne && board[i].indexOf(1) !== -1) {
      queenOne = [i, board[i].indexOf(1)];
    }
    if (queenOne && board[i].indexOf(i) !== -1) {
      if (queenOne[0] === i) {
        queenTwo = [i, board[i].indexOf(1, queenOne[1] + 1)];
      } else {
        queenTwo = [i, board[i].indexOf(1)];
      }
    }
  }
  if (
    queenOne[0] === queenTwo[0] || queenOne[1] === queenTwo[1] || (Math.abs(queenOne[1] - queenTwo[1]) === Math.abs(queenOne[0] - queenTwo[0]))
  ) {
    result = true;
  } else {
    result = false;
  }

  return result;
};


// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));