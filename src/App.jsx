import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { PassKeyComponent } from './components/PassKey'
import { SubmitPasskeyForm } from './components/SubmitPassKeyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PassKeyComponent />
      <SubmitPasskeyForm />
    </>
  )
}

export default App
