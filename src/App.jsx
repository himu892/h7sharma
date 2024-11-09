import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Experince from './pages/Experince'
import Skills from './pages/Skills'
import ResumePage from './pages/Resume'
import Contact from './pages/Contact'
import TopHeader from './components/TopHeader'
import NavHeader from './components/NavHeader'
import HeroSection from './components/HeroSection'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experince />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>

      {/* <TopHeader />
      <NavHeader />
      <HeroSection /> */}

    </>
  )
}

export default App
