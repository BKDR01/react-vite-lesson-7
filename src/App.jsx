import { useState } from 'react'
import './App.css'
import Section from './components/Section/section'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header'

function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Section />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
