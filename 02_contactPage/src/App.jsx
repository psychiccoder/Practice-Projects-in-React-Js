import { useState } from 'react'

import './App.css'
import Navigation from './components/Navigation/Navigation'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Hero from './components/Hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="main">
        <Navigation />
        <ContactHeader />
      </main>
      <Hero />
    </>
  )
}

export default App
