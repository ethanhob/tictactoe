import React, { useState } from 'react';
import "./TicTacToe.css"

const TicTacToe= () => {
const [turn, setTurn] = useState('x');
const [cells, setCells] = useState(Array(9).fill(''));
const [winner, setWinner] = useState(null);
const [draw,setDraw] = useState(false);

const checkWinner = (squares) => {
 const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
 ];
 for (let i=0; i<lines.length; i++){
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setWinner(squares[a]);
    }   
    }

if(!squares.includes('')){
    // if no squares are empty and the above isnt true its a draw 
    setDraw(true);
}
// if the conditions above are not met return null
return null;
}
 

const handleClick = (num) => {
    let squares = [...cells];
    if(cells[num] !== ''){
        alert('this has already been clicked');
        return;
        // do nothing
    }

    if(turn === 'x'){
        squares[num] = 'x';
    setTurn('o');
}
else{
    squares[num] = 'o';
    setTurn('x');
}
setCells(squares);
checkWinner(squares);

}
const handleRestart= () => {
    setWinner(null);
    setDraw(false);
    setCells(Array(9).fill(''));
    // restarts the winner and setCells with a blank array of 9 spaces and fills them with empty strings
}
const Cell = ( {num}) => {
    return(
        <td onClick={() => handleClick(num)}>{cells[num]}</td>
         )
      }
 return (
        <div className ="container">
            <table>
                 <div className="heading">Turn: {turn} </div>
                 <tr>
                    <Cell num={0} />
                    <Cell num={1} />
                    <Cell num={2} />
                </tr>
                <tr>
                    <Cell num={3} />
                    <Cell num={4} />
                    <Cell num={5} />
                </tr>
                <tr>
                  <Cell num={6} />
                  <Cell num={7} />
                  <Cell num={8} />
                </tr>
            </table>
          <div className = "result">
             {winner && (
              
                <>
                <p>{winner} is the winner!</p>
                <button onClick={() => handleRestart()} className = "button">Play Again</button>
                </>)}
             {draw &&  (
                <>
                <p>This is a draw</p>
                <button onClick={() => handleRestart()} className = "button">Play Again</button>
                </>)}
                </div>            
          
        </div>
        
       )}
export default TicTacToe;