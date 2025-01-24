import React,{Suspense} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { ThemeProvider } from './ThemeContext'
import useLocalStorage from './hooks/useLocalStorage'
import Books from './components/react-router/Books'
import Book from './components/react-router/Book'
import NotFound from './components/react-router/NotFound'
import { AuthProvider } from './UserContext'
import ProtectedRoute from './components/react-router/ProtectedRoute'
import Admin from './components/react-router/Admin'
import UnAuthorised from './components/react-router/UnAuthorised'
import { Provider } from 'react-redux'
import store from './store'
import Todo from './components/Todos/Todo'
const Home = React.lazy(()=>import('./Home'))

//const home = React.lazy(()=>import('./Home').then(module=>{default:module.Home}))
//if home is not default exported 

function App() {
  const [value, setValue] = useLocalStorage('name','')

  return (
    <Provider store={store}>
        <AuthProvider>
          <ThemeProvider>
            {/* <input type="text" value={value} onChange={e=>setValue(e.target.value)} /> */}
            <Router>
              <NavBar/>
              <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<h1>about</h1>} />
                    <Route path="/books">
                      <Route index element={<Books/>}/>
                      <Route path=':id' element={<Book/>} />
                    </Route>
                    <Route path='/todos' element={<Todo/>} />
                    <Route path="/admin" element={
                      <ProtectedRoute allowedRoutes={["admin"]}>
                          <Admin/>
                      </ProtectedRoute>
                    }/>
                    <Route path='/unauthorised' element={<UnAuthorised/>} />
                    <Route path='*' element={<NotFound/>} />
                </Routes>
              </Suspense>
            </Router>
          </ThemeProvider>
      </AuthProvider>
    </Provider>
    
    
  )
}

export default App
