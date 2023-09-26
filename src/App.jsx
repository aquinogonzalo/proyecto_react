import { useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar'
import pm from './assets/pm.png'

function App() {

  return (
    <>
      <Navbar />
      <div>
        <a href="https://poe.com/s/Z6nUNa9O6nHviGQM7Whh" target="_blank" rel="noreferrer">
          <img src={pm} className="logo" alt="centinela logo" />
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
