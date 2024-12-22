import './App.css'
import TicTacToe from './components/TicTacToe'
import UserRating from './components/UserRating'

function App() {
  return (
      <>
      <h2>Lists of all projects here</h2>
      <div>
        <div>
          <p>1. User Rating</p>
          <UserRating/>
        </div>
        <p>Tic Tac Toe</p>
        <TicTacToe/>
      </div>
      </>
  )
}

export default App
