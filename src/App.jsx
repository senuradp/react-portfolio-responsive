import React from 'react'
import './App.css'
import Home from './components/home/Home.jsx';
import Services from './components/services/Services.jsx';
import Skills from './components/skills/Skills.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';

function App() {

  return (
    <main className='main'>
      <Home />
      <Services />
      <Skills />
      <Portfolio />
    </main>
  )
}

export default App
