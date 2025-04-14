import { useState } from 'react'
import './App.css'
import Header from './components/Golova/Header'
import Footer from './components/ThisEnd/Footer'
import Center from './components/Section/Center'

function App() {

  return (
    <>
      <header>
       <Header />
      </header>
      <main>
        <Center />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
