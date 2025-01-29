import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App () {
    let [counterVisible,setCounterVisible]=useState(true);
    useEffect(function(){
      setInterval(function(){
        setCounterVisible(c=>!c)
      },5000);
    },[])
    return <div>
      <b>
        Hi there
      </b>
      {counterVisible? <Counter></Counter>: null};
    </div>
}
function Counter(){
  const [count,setCount]=useState(0);//we have to create this since react does not accept static variables we need dynamic 
// const [count,setCount]=useState({count : 0}); initialization is done only once

  // setInterval(function(){setCount(count+1)},1000);
  //application is breaking because the setinterval is called everytime React re renders the apllication
  //to solve it we use hookinn into the lifecycle events of react
  
  useEffect(function(){ //hooking-the content inside wont run again and again
    console.log("On mount")
    let clock=setInterval(function(){
      console.log("in setInvertal")
      setCount(count=>count+1)
    },1000);

    return function(){   //code for cleanup(when component unmounts)
    console.log("unmount");
      clearInterval(clock); //this logic will run only if dependency array is empty
  }
  },[]);//dependency array
  
  
  
  return <div>
    <h1 id='text'>{count}</h1> 
  </div>
}
export default App

/*
mounting-when the component first enters dom 
rerendering-when thee component re renders
unmounting-when component leaves the dom
*/