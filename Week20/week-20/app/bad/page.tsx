"use client"  // necessary

import { useState } from "react";

export default function bad(){
    const [count,setCount]=useState(0);
    return <div>
        <button onClick={()=>{
        setCount(c=>c+1)
    }}>Click Me {count}</button>
    </div>
}