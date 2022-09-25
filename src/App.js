import React from 'react'
import './App.css'
import { About } from './Components/About'
import { Clients } from './Components/Clients'
import EducationExperiences from './Components/Education_Experiences'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { Inquiry } from './Components/Inquiry'
import { Nav } from './Components/Nav'
import { Projects } from './Components/Projects'
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
      <Projects />
      <Inquiry />
      <Footer />
    </>
  )
}

export default App