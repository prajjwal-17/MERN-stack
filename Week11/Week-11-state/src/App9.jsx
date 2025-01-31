import { useEffect, useState } from "react";

function App(){
    const [data,setData]=useState({})

    async function getPosts() {
        const response=await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const json=await response.json();
        setData(json);
    }

    useEffect(()=>{
        getPosts();
    },[])
    return <div>
        {data.title}

    </div>
}

export default App;