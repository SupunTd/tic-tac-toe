import React, { useState } from "react";
import "./main.css";

const App = () => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [isXNext, setIsXNext] = useState(true);
	const [winningSquares, setWinningSquares] = useState([]);

	const handleClick = (index) => {
		if (board[index] || calculateWinner(board)) return;
		const newBoard = board.slice();
		newBoard[index] = isXNext ? "X" : "O";
		setBoard(newBoard);
		setIsXNext(!isXNext);

		const winner = calculateWinner(newBoard);
		if (winner) setWinningSquares(winner.line);
	};

	const resetGame = () => {
		setBoard(Array(9).fill(null));
		setIsXNext(true);
		setWinningSquares([]);
	};

	const winner = calculateWinner(board)?.player;
	const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? "X" : "O"}`;

	return (
		<div className="game">
			<h1>Tic Tac Toe</h1>
			<div className="status">{status}</div>
			<div className="board">
				{board.map((value, index) => (
					<Square
						key={index}
						value={value}
						onClick={() => handleClick(index)}
						highlight={winningSquares.includes(index)}
					/>
				))}
			</div>
			{winner && <div className="winner-message">🎉 Congratulations {winner}! 🎉</div>}
			<button onClick={resetGame} className="reset-button">Reset Game</button>
		</div>
	);
};

const Square = ({ value, onClick, highlight }) => (
	<button className={`square ${highlight ? "highlight" : ""}`} onClick={onClick}>
		{value}
	</button>
);

const calculateWinner = (board) => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (board[a] && board[a] === board[b] && board[a] === board[c]) {
			return { player: board[a], line: lines[i] };
		}
	}
	return null;
};

export default App;
