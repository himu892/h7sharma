import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TopHeader from './components/TopHeader'
import NavHeader from './components/NavHeader'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <TopHeader />
      <NavHeader />

    </>
  )
}

export default App
