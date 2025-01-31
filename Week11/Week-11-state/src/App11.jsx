import { useFetch } from "./hooks/useFetch2";

function App(){
   const {finalData}=useFetch("https://jsonplaceholder.typicode.com/posts/2");
    return <div>
            {JSON.stringify(finalData)}

    </div>
}

export default App;