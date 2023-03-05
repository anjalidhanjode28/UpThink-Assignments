import React, { useState } from "react";

import { Board } from "./Components/Board";
import { ResetButton } from "./Components/ResetButton";
import { ScoreBoard } from "./Components/ScoreBoard";
import './App.css';

const App = () => {

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const [xPlaying, setXPlaying] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null))
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 })
  const [gameOver, setGameOver] = useState(false);
  const [name,setName] = useState("")

  const handleBoxClick = (boxIdx) => {
    // Step 1: Update the board
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    })

    setBoard(updatedBoard);

    // Step 2: Check if either player has won the game
    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore })
        setName("Winner is User Y")
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore })
        setName("Winner is User X")
      } 
    }

    // Step 3: Change active player
    setXPlaying(!xPlaying);
  }

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      // Iterate through win conditions and check if either player satisfies them
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        // console.log(x,y,z,board[x])
        // document.body.style.backgroundColor = "red";
        return board[x];
      }else if (!board.includes(null)) {
        // return console.log("DRAW")
      }
    }
  }

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }

  return (
    <div className="App">
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      {gameOver?<h1 style={{color: "rgb(44, 135, 255)"}}>{name}</h1>:false}
      {!board.includes(null)?<h1 style={{color: "rgb(44, 135, 255)"}}>Game is DRAW . Click Restart to Play Again !!!</h1>:false}
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ResetButton resetBoard={resetBoard} />
      
    </div>
  );
}

export default App;
