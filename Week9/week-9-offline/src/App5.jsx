import {useState,useEffect} from "react";

function App() {
  const [count,setCount]=useState(0);
  const [count2,setCount2]=useState(0);
  
  function increaseCount(){
    setCount(c=>c+1)
  }
  function decreaseCount(){
    setCount2(c=>c-1)
  }

  return <div>
     <Counter count={count} count2={count2}></Counter>
     <button onClick={increaseCount}>Increase Count</button>
     <button onClick={decreaseCount}>Decrease Count</button>
     After Counter
  </div>
}
function Counter(props) {
  
  useEffect(function(){
    console.log("Mount")

    return function(){
      console.log("Unmount")
    }
  },[])

  useEffect(function(){  //we use it when some state variables change
    console.log("count has changed") //will get logged for count 1 only..since dependency array doesnt have count 2
  
     return function(){
      console.log("Cleanup inside second useEffect")
     } 
  },[props.count]);

  return <div>
    Counter1 {props.count}
    <br />
    Counter2 {props.count2}
  </div>
}
export default App