import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Info from "./Info.jsx"
import About from "./About.jsx"
import Interest from "./Interest.jsx"
import Footer from "./Footer.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Info />
      <main>
        <About />
        <Interest />
      </main>
      <Footer />
    </div>
  )
}

export default App
