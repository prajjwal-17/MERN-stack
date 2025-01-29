import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App () {
    return <div>
      <b>
        Hi there
      </b>
      <Counter></Counter>
    </div>
}
function Counter(){
  const [count,setCount]=useState(0);//we have to create this since react does not accept static variables we need dynamic 
// const [count,setCount]=useState({count : 0});

  function IncreaseCount(){
    setCount(count+1);
  }
  function DecreaseCount(){
    setCount(count-1);
  }
  function ResetCount(){
    setCount(0);
  }

  return <div>
    <h1 id='text'>{count}</h1>
    <button onClick={IncreaseCount}>Increase Count</button>
    <button onClick={DecreaseCount}>Decrease Count</button>
    <button onClick={ResetCount}>Reset Count</button>
  </div>
}
export default App