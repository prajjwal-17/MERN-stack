import { useEffect, useRef } from "react";

export const usePrev=(value)=>{
    const ref=useRef(); ///useRef doesnt re render the component when the value of its variable changes
    console.log("re-render happened with new value "+ value)


    useEffect(()=>{
        console.log("updated th ref to be "+value)
        ref.current=value
    },[value]);
     
    console.log("returned "+ref.current)
    return ref.current;
}
// whenever usePrev is called with a new value it first returns the ref.current then calls useEffect(property)
// when the usePrev first gets called the useRef is just initialized with no value and then ref.current is returned and then useEffet is called
// that is why when value is 0 no prev value is shown since it is undefined
