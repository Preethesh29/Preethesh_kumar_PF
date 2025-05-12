import React from 'react'
import { motion } from 'framer-motion'
import { StyleSheetManager } from 'styled-components'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <StyleSheetManager>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <ScrollToTop />
      </motion.div>
    </StyleSheetManager>
  )
}

export default App 