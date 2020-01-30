import React, { Component } from "react";
import "./App.css";
import './style.css'
import { fillBoard } from "./components/board";

function Cell() {
  return <div className="cell" style={{ width: "30px", height: "30px" }}></div>;
}

function Row(props) {
  const arrayToReturn = [];
  for (let index = 0; index < props.rowData.length; index++) {
    arrayToReturn.push(<Cell></Cell>);
  }
  return <div className='row'>{arrayToReturn}</div>;
}

function Board(props) {
  console.log(props.board)
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
    this.state = { board: fillBoard() };
  }

  render() {
    return (
      <div className="App">
        <Board board={this.state.board}/>
      </div>
    );
  }
}

export default App;
