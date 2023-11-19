import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/NavTabs'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  )
}

export default App
