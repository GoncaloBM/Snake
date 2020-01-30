import React, { Component } from "react";
import { randomMaca } from "./maca";

export const cobraAndar = (board, direction) => {
  const newBoard = copyNewBoard(board);

  switch (direction) {
    case "left":
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === 1) {
            newBoard[i][j] = 0;
            checkBoard(i, j, newBoard); //Derrota na parede

            // maca noutro lado
            if (newBoard[i][j - 1] === 2) {
              randomMaca(newBoard);
            }


            newBoard[i][j - 1] = 1;
          }
        }
      }
      return newBoard;

    case "right":
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === 1) {
            newBoard[i][j] = 0;
            checkBoard(i, j, newBoard); //Derrota na parede

            // maca noutro lado
            if (newBoard[i][j + 1] === 2) {
              randomMaca(newBoard);
            }


            newBoard[i][j + 1] = 1;
          }
        }
      }
      return newBoard;

    case "up":
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === 1) {
            newBoard[i][j] = 0;
            checkBoard(i, j, newBoard); //Derrota na parede

            // maca noutro lado
            if (newBoard[i - 1][j] === 2) {
              randomMaca(newBoard);
            }


            newBoard[i - 1][j] = 1;
          }
        }
      }
      return newBoard;

    case "down":
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === 1) {
            newBoard[i][j] = 0;

            checkBoard(i, j, newBoard); //Derrota na parede
            // maca noutro lado
            if (newBoard[i + 1][j] === 2) {
              randomMaca(newBoard);
            }

            newBoard[i + 1][j] = 1;
          }
        }
      }
      return newBoard;
  }
};

const copyNewBoard = board => {
  let newBoard = [];
  for (let i = 0; i < board.length; i++) {
    const newLine = [...board[i]];
    newBoard.push(newLine);
  }
  return newBoard;
};

const checkBoard = (j, i, newBoard) => {
  let defeat = true;

  if (j - 1 === -1) {
    defeat = false;
    return defeat;
  } else if (newBoard[i + 1][j] === undefined) {
    defeat = false;
    return defeat;
  } else if (i - 1 === -1) {
    defeat = false;
    return defeat;
  } else if (newBoard[i][j + 1] === undefined) {
    defeat = false;
    return defeat;
  }
};
