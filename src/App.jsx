import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certification from './components/Certification'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <>
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
        <Certification />
        <Contact />
        <ScrollToTop />
      </motion.div>
    </>
  )
}

export default App 