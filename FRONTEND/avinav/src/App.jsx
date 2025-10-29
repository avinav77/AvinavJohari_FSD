import React from 'react'
import Card from './components/Card.jsx'
import './App.css'
import Navbar from './components/Navbar.jsx'
function App() {
  return (
    <div>
      <Navbar home="ABES Engineering College"/>
      <br />
      <Card name="aditya" age={25}/>
      <br />
      <Card name="john" age={30}/>
      <br />
      <Card name="jane" age={28}/>
      </div>
  )
}

export default App