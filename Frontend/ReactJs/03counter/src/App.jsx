import { useState } from 'react'//use state hook to modify in the data 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'



function App() {

  let [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter(counter+=1);
  }
  const minusone = () => {
    if(counter>0){
      setCounter(counter-=1);
    }
  }

  return (
    <>
      <h1>Hello deepanshu this side</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addOne}>Add count</button>
      <button onClick={minusone}>Decrease value </button>
    </>
  )
}

export default App
