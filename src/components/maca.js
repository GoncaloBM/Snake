import React, { Component } from "react";

export const randomMaca = board => {
  let newBoard = [...board];

  let i = Math.floor(Math.random() * (board.length-1));
  let j = Math.floor(Math.random() * (board.length-1));

  console.log(i, j);
  if (newBoard[i][j] === 1) {
    i++;
    j++;
  }
  newBoard[i][j] = 2;

  return newBoard;
};
