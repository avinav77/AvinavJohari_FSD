import React from 'react'
import Card from './components/Card.jsx'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/footer.jsx'
function App() {
  return (
    <div>
      <Navbar/>
      <br />
      <Card />
      <br />
      <Footer/>
    </div>
  )
}

export default App