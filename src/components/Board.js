import React, {useState} from "react";
import Square from "./Square";
const Board = () => {
    const initialSquares = new Array(9).fill(null);
    const [squares, setSqaures] = useState(initialSquares);
    const [xIsNext, setXisNext] = useState(true);
  
    const handleClickEvent = (i) => {
      // 1. Make a copy of the squares state array
      const newSquares = [...squares];
      
      const gameOver = Boolean(claculateWinner(newSquares));
      const squareTaken = Boolean(newSquares[i]);
      
      if(gameOver || squareTaken){
        return;
      }
      
      // 2. Mutate the copy
      newSquares[i] = xIsNext ?'X':'O';
  
      // 3. Set the state with the new array
      setSqaures(newSquares);
      setXisNext(!xIsNext);
    }
  
  
    const winner = claculateWinner(squares);
    const statusText = winner? `Winner : ${winner}`:`Next player : ${xIsNext?'X':'O'}`;
  
    const renderSquare = (i) =>{
      return <Square 
        value={squares[i]}
        clickEvent = {() => handleClickEvent(i)}
      />
    }
    return (
      <div className="board">
        <div className="status">{statusText}</div>
        <div className="boardRow">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="boardRow">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="boardRow">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    )
  }
function claculateWinner(squares){
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ]
  for(let line of lines){
    const [a,b,c] = line;

    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}
export default Board;