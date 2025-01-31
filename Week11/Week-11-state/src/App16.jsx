import { useEffect, useState,useRef } from "react";
import { usePrev } from "./hooks/use-prev";



const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};
function App(){
    
const [inputVal, setInputVal]=useState("")
const debouncedValue=useDebounce(inputVal,200)

function change(e){   //e is the current event of an input val and e.target.value gives its value
    setInputVal(e.target.value)
}

useEffect(()=>{
    //expensive operation or fetch
    console.log("Expensive operation")
},[debouncedValue])

 return <div>
       <input type="text" onChange={change}/>

    </div>

}
export default App;