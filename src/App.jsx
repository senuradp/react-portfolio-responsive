import React from 'react'
import './App.css'
import Home from './components/home/Home.jsx';
import Services from './components/services/Services.jsx';
import Skills from './components/skills/Skills.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Resume from './components/resume/Resume.jsx';
import Testimonials from './components/testimonials/Testimonials.jsx';
import Contact from './components/contact/Contact.jsx';

function App() {

  return (
    <main className='main'>
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
      <Testimonials />
      <Contact />
    </main>
  )
}

export default App
