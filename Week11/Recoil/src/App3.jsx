// App.js
import React, { memo, useEffect, useState } from 'react';

function App() {
  return (
    <div>
    <Counter />
    </div>
  );
}

function Counter() {
  const [count,setCount]=useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setCount((c)=>c+1)
    },3000)
  },[])
  return (
    <div>
      <MemorizedCurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
}

const MemorizedCurrentCount=memo(CurrentCount) //wrapping in memo

function CurrentCount() {
  
  return <div>1</div>;
}

const Increase=memo(function () {  //another way 

  return (
    <div>
      <button >Increase</button>
    </div>
  );
})

const Decrease=memo(function() {
  return (
    <div>
      <button >Decrease</button>
    </div>
  );
})

export default App;

//now only the parent component re renders
