// App.js
import React, { useEffect, useState } from 'react';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from './store/atoms/counter';

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
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
}

function CurrentCount() {
  
  return <div>1</div>;
}

function Increase() {

  return (
    <div>
      <button >Increase</button>
    </div>
  );
}

function Decrease() {
  return (
    <div>
      <button >Decrease</button>
    </div>
  );
}

export default App;

//even if we are not passing down the state variable it is still re rendering everything
//so we have to tell it explicitly that is souldnt re render untill props are passed down or state variable in it changes
