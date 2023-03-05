import React from "react";

import "./ScoreBoard.css";

export const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;

  return (
    <>
      <h1
        style={{
          fontSize: "3rem",
          textDecoration: "underline",
          color: "rgb(44, 135, 255)",
        }}
      >
        Tic-Tac-Toe Game
      </h1>
      <div className="scoreboard">
        <span className={`score x-score ${!xPlaying && "inactive"}`}>
          User X - {xScore}
        </span>
        <span className={`score o-score ${xPlaying && "inactive"}`}>
          User Y - {oScore}
        </span>
      </div>
    </>
  );
};
