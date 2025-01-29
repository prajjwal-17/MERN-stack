import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [count,setCount]=useState(1);
  const [count2,setCount2]=useState(1);
  
  function increaseCount(){  // we use this when we dont send anything to dependency array
    setCount((prev)=>{
      return prev+1;
    });    
  }
  function decreaseCount(){  // we use this when we dont send anything to dependency array
    setCount2((prev)=>{
      return prev-1;
    });    
  }
  useEffect(()=>{
    setInterval(increaseCount,5000); //avoids multiple re renders
    setInterval(decreaseCount,8000); //avoids multiple re renders
  },[]) //if we wanna use a state variable in a useEffect we need to put it in the dependency array

  useEffect(()=>{
    console.log("The count has been changed to "+count)
  },[count,count2]) //this works only when value of count changes

  return (
    <div>
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/472/472371.png"
          style={{ cursor: "pointer" }}
          width={40}
          alt="bell icon"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            background: "red",
            borderRadius: "50%",
            width: 20,
            height: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "12px",
          }}
        >
          {count}  {count2}
        </div>
        
      </div>
      <div>
        <button onClick={increaseCount}>Increase Count</button>
        </div>
    </div>
  );
}

export default App;
