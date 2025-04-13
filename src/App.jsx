import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Section from './components/Section/section'
import Footer from './components/Footer/Footer'

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
