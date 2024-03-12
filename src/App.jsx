import React from 'react'
import './App.css'
import Home from './components/home/Home.jsx'
import Services from './components/services/Services.jsx'
import Skills from './components/skills/Skills.jsx'

function App() {

  return (
    <main className='main'>
      <Home />
      <Services />
      <Skills />
    </main>
  )
}

export default App
