import { useState } from 'react'

import './App.css'
import './New.css'

function App() {
  let [Counter, setCounter] = useState(15)
  // let Counter = 15;
  const addValue = () => {
    setCounter(Counter + 1)
    console.log("CLicked", Counter);
    
  }
  const removeValue= () =>{
    if(Counter>0){

      setCounter(Counter - 1)
    }

  }

  return (
    <>
      <h1 className='title'>Yash Bhamania</h1>
      <p className='para'>This is the sample of the code but no  one is reday to handle this.</p>
      <h2>Counter Value: {Counter}</h2>
      <button
        onClick={addValue}>Add Value{Counter} </button>
      <br />
      <button
     onClick={removeValue} >Decrese Value {Counter} </button>
      <p>Footer:{Counter} </p>
    </>
  )
}

export default App
