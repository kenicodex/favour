import React from 'react'
import './App.css'
import { About } from './Components/About'
import { Clients } from './Components/Clients'
import EducationExperiences from './Components/Education_Experiences'
import { Header } from './Components/Header'
import { Nav } from './Components/Nav'
import { Tools } from './Components/Tools'

function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Clients />
      <EducationExperiences />
      <Tools />
    </>
  )
}

export default App