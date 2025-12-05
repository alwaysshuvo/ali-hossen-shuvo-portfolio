import React, { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import './index.css'

function App() {
  return (
    <div className="bg-gradient-dark min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="bg-black bg-opacity-50 text-center py-6 border-t border-gray-700">
        <p className="text-gray-400">© 2025 Ali Hossen Shuvo. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
