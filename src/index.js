import ReactDOM from "react-dom";
import Board from "./components/Board";
import './index.css'

const Game = () => {
  return (
    <div className="game">
      Tic-Tac-Toe
      <Board/>
    </div>
  )
}
ReactDOM.render(
  <Game/>,
  document.getElementById('root')
)