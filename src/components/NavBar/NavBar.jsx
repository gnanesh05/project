import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import { useTheme } from '../../ThemeContext'

const NavBar = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <nav className='navbar'>
        <div>
            <Link to="/">Projects</Link>
            <Link to="/About">About</Link>
            <NavLink to="/books" style={({isActive})=>{return isActive ? {color:"red"}:{}}}>Books</NavLink>
            <Link to="/todos">Todos</Link>
            <Link to="/admin">Admin</Link>
        </div>
        <div className="switch">
            <label htmlFor="theme-input">
                <input type="checkbox" id='theme-input'  checked={theme=="dark"} onChange={toggleTheme}/>
                <span className="slider"></span>
            </label>
        </div>
    </nav>
  )
}

export default NavBar