import { useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar'
import pm from './assets/pm.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={pm} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Estándar en Seguridad e Higiene</h1>
      <p className="read-the-docs">
        "Construimos un mundo más seguro y sostenible para todos los usuarios." -Tomás Valdez CEO de Centinela
      </p>
    </>
  )
}

export default App
