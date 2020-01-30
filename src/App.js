import React, { Component } from "react";
import "./App.css";
import "./style.css";
import { fillBoard } from "./components/board";
import { snakeMove } from "./components/snake";
import { cobraAndar } from "./components/cobraAndar";

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
    this.state = { board: fillBoard(25), direction: "down" };
    this.moveSnake();
  }

  escFunction = event => {
    if (event.keyCode === 40) {
      this.setState({
        direction: "down"
      });
    } else if (event.keyCode === 38) {
      this.setState({
        direction: "up"
      });
    } else if (event.keyCode === 37) {
      this.setState({
        direction: "left"
      });
    } else if (event.keyCode === 39) {
      this.setState({
        direction: "right"
      });
    }
  };

  moveSnake = () => {
    this.setState(snakeMove(this.state));
  };

  cobraAndou = () => {
    this.setState({
      board: cobraAndar(this.state.board, this.state.direction)
    });
  };

  componentDidMount() {
    setInterval(() => {
      this.cobraAndou();
    }, 100);
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  render() {
    return (
      <div className="App">
        <Board board={this.state.board} />
      </div>
    );
  }
}

export default App;
