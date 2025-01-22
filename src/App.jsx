import { useState, useContext } from 'react'
import { LangContext} from './context/langContext'
import { Navbar } from './components/topbar'
import { Projects } from './components/projects'
import { Presentation } from './components/presentation'
import { SubProjects } from './components/subProjets'
import { Skills } from './components/skills'
import { Contact } from './components/contact'
import { Footer } from './components/footer'

function App() {
  const {lang, langSwitch, T} = useContext(LangContext)
  return (
    <>
    <Navbar />
    <Presentation />
    <Projects />
    <SubProjects />
    <Skills />
    <Contact />
    <Footer />
    </>
  )
}

export default App
