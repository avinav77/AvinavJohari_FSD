import React from 'react'
import './navbar.css'
function Navbar(props) {
  return (
    <div className="navbar">
      <h1>My App</h1>
      <nav>
        <ul>
          <li>{props.home}</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar