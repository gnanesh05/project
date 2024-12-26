import { useState } from "react";

const initalBoard = ()=>Array(9).fill(null);

const UseTicTacToe = ()=>{
     const [board, setBoard] = useState(initalBoard());
     const [isXNext, setIsNext] = useState(true);

     const WINNING_PATTERNS = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
     ]

     const calculateWinner = (currentBoard)=>{
        for(const element of WINNING_PATTERNS){
            const[a,b,c] = element;
            if((currentBoard[a] && currentBoard[a]===currentBoard[b]) && ( currentBoard[b]===currentBoard[c])){
                return currentBoard[a];
            }
        }
     }

     const handleClick = (index)=>{
        const winner = calculateWinner(board);
        if(winner || board[index]){
            return;
        }

        let newBoard = [...board]
        newBoard[index] = isXNext?"X":"O"
        setBoard(newBoard)
        setIsNext(!isXNext)
     }

     const getStatusMessage = ()=>{
        const winner = calculateWinner(board);
        if(winner){
            return `Player ${winner} won!`
        }
        else if(!board.includes(null)){
            return "It's a Draw!"
        }
        return `Player ${isXNext?"X" : "O"} turn`
     }

     const resetGame = ()=>{
        setBoard(initalBoard());
        setIsNext(true);
     }

     return {board,handleClick,calculateWinner, getStatusMessage, resetGame}
}

export default UseTicTacToe