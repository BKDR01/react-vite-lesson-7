import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/Footer/Footer'
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
