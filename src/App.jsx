import { useState } from 'react'
import TopHeader from './components/TopHeader'
import NavHeader from './components/NavHeader'
import HeroSection from './components/HeroSection'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <TopHeader />
      <NavHeader />
      <HeroSection />

    </>
  )
}

export default App
