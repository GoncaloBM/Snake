import React, { Component } from "react";

export const snakeMove = (state) => {
    let newState = {...state};

    newState.board[5][5] = 1;

    return newState;
}