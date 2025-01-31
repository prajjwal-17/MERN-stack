import { useState } from "react";
import {  useFetch3 } from "./hooks/useFetch2";
//the url is logging but the posts arrent changing until we use url in dependency arry
function App(){
    const [currentPost,setCurrenPost]=useState(1);

   const {finalData,loading}=useFetch3("https://jsonplaceholder.typicode.com/posts/"+currentPost,10);
   
   if (loading)
      return <div>
        Loading........
      </div>
   

    return <div>
        <button onClick={()=>setCurrenPost(1)}>1</button>
        <button onClick={()=>setCurrenPost(2)}>2</button>
        <button onClick={()=>setCurrenPost(3)}>3</button>
            {JSON.stringify(finalData)}

    </div>
}

export default App;