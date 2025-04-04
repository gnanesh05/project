import React,{useState} from 'react'
import TicTacToe from './components/TicTacToe/TicTacToe'
import UserRating from './components/Rating/UserRating'
import Quiz from './components/Quiz/Quiz'
import Grid from './components/Grids/Grid'
import Like from './components/Like/Like'
import Folder from './components/Folder/Folder'
import SearchBar from './components/AutoComplete/SearchBar'
import NotificationGrid from './components/CustomNotification/NotificationGrid'

const Home = () => {
    const [project, setProject] = useState(0);

  const showProject = ()=>{
    switch(project){
      case 0:
        return <UserRating/>
      case 1:
        return <TicTacToe/>
      case 2:
        return <Quiz/>
      case 3:
        return <Grid/>
      case 4:
        return <Like/>
      case 5:
        return <Folder/>
      case 6:
        return <SearchBar/>
      case 7:
        return <NotificationGrid/>
      default:
        return <UserRating/>
    }
  }

  const projectHandler = (projectNo)=>{
    setProject(projectNo);
  }
  
  return (
    <div>
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
                  <li>
                    <button onClick={()=>projectHandler(3)}>Grid Lights</button>
                  </li>
                  <li>
                    <button onClick={()=>projectHandler(4)}>Like</button>
                  </li>
                  <li>
                    <button onClick={()=>projectHandler(5)}>Folder</button>
                  </li>
                  <li>
                    <button onClick={()=>projectHandler(6)}>AutoComplete Search</button>
                  </li>
                  <li>
                    <button onClick={()=>projectHandler(7)}>Custom Notification</button>
                  </li>
                </ul>
              </div>
              <div>
                <div>
                  {showProject()}
                </div>

              </div>
    </div>
  )
}

export default Home