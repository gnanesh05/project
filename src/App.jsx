import React,{useState} from 'react'
import './App.css'
import TicTacToe from './components/TicTacToe/TicTacToe'
import UserRating from './components/Rating/UserRating'
import Quiz from './components/Quiz/Quiz'

function App() {
  const [project, setProject] = useState(0);

  const showProject = ()=>{
    switch(project){
      case 0:
        return <UserRating/>
      case 1:
        return <TicTacToe/>
      case 2:
        return <Quiz/>
      default:
        return <UserRating/>
    }
  }

  const projectHandler = (projectNo)=>{
    setProject(projectNo);
  }

  return (
      <>
      <h2>Lists of all projects here</h2>
      <div className="choose-projects">
        <ul className='projects'>
          <li>
            <button onClick={()=>projectHandler(0)}>User Rating</button>
          </li>
          <li>
            <button onClick={()=>projectHandler(1)}>Tic Tac Toe</button>
          </li>
          <li>
            <button onClick={()=>projectHandler(2)}>Quiz</button>
          </li>
        </ul>
      </div>
      <div>
        <div>
          {showProject()}
        </div>

      </div>
      </>
  )
}

export default App
