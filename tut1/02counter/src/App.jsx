import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  //let counter = 5

  const addValue = () => {
    //counter = counter + 1;
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Vikas Counter App</h1>
      <h3>Counter Value : {counter}</h3>

      <button
        onClick={addValue}>Add Value {counter} </button>
      <br/>
      <button
        onClick={removeValue}
        >Remove Value {counter}</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
