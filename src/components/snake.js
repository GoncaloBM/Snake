import React, { Component } from "react";

export const snakeMove = (state) => {
    let newState = {...state};

    newState.board[25][25] = 1;

    return newState;
}