import { useState } from 'react'
import './App.css'
import Header from './header.jsx'
import InputText from './comp1.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <InputText/>
    </>
  )
}

export default App
