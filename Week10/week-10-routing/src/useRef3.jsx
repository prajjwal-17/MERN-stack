import {useRef,useState} from 'react'

function App(){
  const [currentCount,setCurrentCount]=useState(0);
  const [timer,setTimer]=useState(0);

  function startClock(){
     let value=setInterval(function(){
      setCurrentCount(c=>c+1);
     },1000);
     setTimer(value); //this will cause an extra re render since we only have to store this value and not show in frontend we should try to avoid it
  }
  function stopClock(){
    console.log(timer);
    clearInterval(timer);
  }
  return <div>
    {currentCount}
    <br />
    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>Stop</button>
  </div>
}
export default App;