import React, { Component } from "react";
import "./App.css";
import "./style.css";
import { fillBoard } from "./components/board";
import { snakeMove } from "./components/snake";

function Cell({ isSnake, isApple }) {
  return (
    <div
      className={`cell ${isSnake ? "snake" : ""} ${isApple ? "apple" : ""}`}
      style={{ width: "15px", height: "15px" }}
    ></div>
  );
}

function Row(props) {
  const arrayToReturn = [];
  for (let index = 0; index < props.rowData.length; index++) {
    arrayToReturn.push(<Cell isSnake={props.rowData[index] === 1}></Cell>);
  }
  return <div className="row">{arrayToReturn}</div>;
}

function Board(props) {
  console.log(props.board);
  return (
    <div className="board">
      {props.board.map((row, index) => {
        return <Row key={index} rowData={row}></Row>;
      })}
    </div>
  );
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { board: fillBoard(50) };
    this.moveSnake();
  }

  moveSnake = () => {
    this.setState(snakeMove(this.state));
  };

  render() {
    return (
      <div className="App">
        <Board board={this.state.board} />
      </div>
    );
  }
}

export default App;
