import React from 'react';
import './style.css';
import logo from './logo.png'


function Header() {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="Christine Camou"></img>
      <ul>
        <header>
          <a className="navItem" href="/About"> About</a>
          <a className="navItem" href="/Projects">Projects</a>
          <a className="navItem" href="/Contact">Contact</a>
        </header>
      </ul>
    </nav>
  )
}

export default Header;