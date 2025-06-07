import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSec from './components/HeroSec'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <div className='text-white'>
      <Navbar />
      <HeroSec />
      <Skills />
    </div>
  )
}

export default App
