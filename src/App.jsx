import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Info from "./Info.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        {/* <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      
      <Info />
    </div>
  )
}

export default App
