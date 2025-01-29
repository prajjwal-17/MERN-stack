import { useEffect, useState } from "react";

function App(){
  const [showTimer,setShowTimer]=useState(true);

  useEffect(()=>{
    setInterval(()=>{
      setShowTimer(currentValue=>!currentValue)
    },5000);
  },[])

     return <div>
        {showTimer && <Timer/>}
     </div>
}
    

    const Timer=function(){
        const [seconds,setSeconds]=useState(0);
        useEffect(function(){ //this code when component mounts
            let clock=setInterval(function(){
                setSeconds(prev=>prev+1);
                console.log("From inside the clock"); //will be displayed without cleanup function even when timer component has left the dom
            },1000);

            //cleanup function
            return function(){
              clearInterval(clock);//this code runs when code unmounts
            }
        },[]);
       return <div>{seconds} seconds elapsed</div>
    }


export default App;