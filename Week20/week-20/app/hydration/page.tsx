"use client";
import axios from "axios";
import { useEffect } from "react"

export default function Refresh() {

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1");
    }, [])

    return <div>
        <button onClick={() => {
            console.log("onclick pressed")
        }}>click me</button>
        hello refresh component
    </div>
}//when we build this app initially only button component with click me text will be served without any interacctive features
// Hydration takes this rendered html and makes it interactive