import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import NavBar from './components/NavBar/NavBar'
import { ThemeProvider } from './ThemeContext'

function App() {
  return (
    <ThemeProvider>
        <Router>
         <NavBar/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<h1>about</h1>} />
         </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
