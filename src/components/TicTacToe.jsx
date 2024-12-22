import React,{useState} from 'react'
import UseTicTacToe from './Hooks/UseTicTacToe'


const TicTacToe = () => {
 const {board, getStatusMessage, resetGame, handleClick} = UseTicTacToe()
  return (
    <div className="game">
        <div className="status">
            {getStatusMessage()}
            <button className='reset' onClick={resetGame}>Reset Game</button>
        </div>
        <div className="board">
            {board.map((cell,index)=>(
                <button className='cell' key={index} onClick={()=>handleClick(index)} disabled={cell!==null}>
                    {cell}
                </button>
            ))}
        </div>
  </div>
  )
}

export default TicTacToe