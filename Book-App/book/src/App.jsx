import React from 'react'
import Book from './components/Book.jsx'
import Navbar from './components/Navbar.jsx'
import './App.css'
function App() {
  return (
    <div>
      <Navbar/>
      <h1>My Book Collection</h1>
      <div id='abc'>
        
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      </div>
    </div>
  )
}

export default App