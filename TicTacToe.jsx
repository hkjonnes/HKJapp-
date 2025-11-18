import React, { useState } from 'react';

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [xTurn, setXTurn] = useState(true);

  const handleClick = (idx) => {
    if (board[idx]) return;
    const newBoard = [...board];
    newBoard[idx] = xTurn ? 'X' : 'O';
    setBoard(newBoard);
    setXTurn(!xTurn);
  };

  const reset = () => setBoard(Array(9).fill(''));

  return (
    <div className="container p-4">
      <h2 className="text-2xl mb-3">Tic Tac Toe 🎮</h2>
      <div className="grid grid-cols-3 gap-1 w-64">
        {board.map((cell, idx) => (
          <div
            key={idx}
            onClick={() => handleClick(idx)}
            className="border w-16 h-16 flex items-center justify-center text-2xl cursor-pointer"
          >
            {cell}
          </div>
        ))}
      </div>
      <button onClick={reset} className="mt-2 px-3 py-1 rounded bg-purple-500 text-white">
        Reset
      </button>
    </div>
  );
}
