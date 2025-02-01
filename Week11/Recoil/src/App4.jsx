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
   const interval= setInterval(()=>{
      setCount((c)=>c+1)
    },3000)

    return ()=>clearInterval(interval)
  },[])
  return (
    <div>
      <MemorizedCurrentCount count={count} />
      <Increase />
      <Decrease />
    </div>
  );
}

const MemorizedCurrentCount=memo(CurrentCount) //wrapping in memo

function CurrentCount({count}) { // now this component will re render
  
  return <div>{count}</div>;
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
