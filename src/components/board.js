export const fillBoard = (size) => {
  const board = [];
  for (let i = 0; i < size; i++) {
    const newRow = [];
    for (let j = 0; j < size; j++) {
      newRow.push('');
    }
    board.push(newRow);
  }
  return board;
};

// export const getNextBoard = board => {
//     const newBoard = [];
//     for (let i = 0; i < board.length; i++) {
//       const row = board[i];
//       const newRow = [];
//       for (let j = 0; j < row.length; j++) {
//         const currentCell = board[i][j];
//         newRow.push(newCellState);
//       }
//       newBoard.push(newRow);
//     }
//     return newBoard;
//   };