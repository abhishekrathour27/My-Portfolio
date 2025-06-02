import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSec from './components/HeroSec'

function App() {

  return (
    <div className='text-white'>
      <Navbar/>
      <HeroSec/>
    </div>
  )
}

export default App
