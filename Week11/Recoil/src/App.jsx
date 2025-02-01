// App.js
import React, { memo, useEffect, useState } from 'react';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from './store/atoms/counter'; // Correct import for counterAtom
import { evenSelector } from './store/selector/selector'; // Correct import for evenSelector

function App(){
  return <div>
  <RecoilRoot>
    <Buttons/>
    <Counter/>
    <IsEven/>
  </RecoilRoot>
  </div>
}
function Buttons() {
  const setCount=useSetRecoilState(counterAtom)

  function increase(){
    setCount(c=>c+2)
  }
  function decrease(){
    setCount(c=>c-1)
  }
  return <div>
     <button onClick={increase}>Increase by 2</button>
     <button onClick={decrease}>Deccrease by 1</button>
  </div>
  
}

function Counter(){
  const count=useRecoilValue(counterAtom);
  return <div>
    {count}
  </div>
}
function IsEven(){
  const even=useRecoilValue(evenSelector)
  return <div>
    {even? "Even" : "Odd"}
  </div>
}
export default App;

