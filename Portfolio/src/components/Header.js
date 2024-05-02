import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>
       <header className="header">
      <div className="container">
        <h1 className="header__title">Rimsha Shahid</h1>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item"><a href="#about" className="header__nav-link">About</a></li>
            <li className="header__nav-item"><a href="#projects" className="header__nav-link">Projects</a></li>
            <li className="header__nav-item"><a href="#contact" className="header__nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
    </div>
  )
}

export default Header
