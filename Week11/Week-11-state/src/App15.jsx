import { useEffect, useState,useRef } from "react";
import { usePrev } from "./hooks/use-prev";


function useDebounce(originalFn){
    const currentClock=useRef();
    const fn=()=>{
        clearTimeout(currentClock.current);
        currentClock.current=setTimeout(originalFn,200)
    }
    return fn;
}

 

function App(){
    function sendDataToBackend(){
        fetch("api.amazon.com/search/")
    }

const debouncedFn=useDebounce(sendDataToBackend)

    return <div>
       <input type="text" onChange={debouncedFn}/>

    </div>

}
export default App;