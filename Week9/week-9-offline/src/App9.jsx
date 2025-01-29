import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [currentTab,setCurrentTab]=useState(0);
  const [tabData,setTabData]=useState({});
  const [loading,setLoading]=useState(false);

  useEffect(() => {
    // Send a backend request to get data on the selected tab
    setLoading(true);
    console.log("Fetching data for Todo #" + currentTab);
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
      .then((res) => res.json()) 
      .then((json) => {   //since res.json returns a promise
        setTabData(json);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [currentTab]);

   return  <div>
    <button onClick={()=>{setCurrentTab(1)}} style={{color:currentTab==1?"red":"black"}}>Todo #1</button>
    <button onClick={()=>{setCurrentTab(2)}} style={{color:currentTab==2?"red":"black"}}>Todo #2</button>
    <button onClick={()=>{setCurrentTab(3)}} style={{color:currentTab==3?"red":"black"}}>Todo #3</button>
    <button onClick={()=>{setCurrentTab(4)}} style={{color:currentTab==4?"red":"black"}}>Todo #4</button>
    <br />
    {loading? "Loading...":tabData.title}
  </div>
  
}

export default App;