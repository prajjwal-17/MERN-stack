import { useState } from "react";
import { SidebarClass1 } from "./components/1-basic-project";
import { Sidebar2Transistion } from "./components/Sidebar2Transistion";
import { Sidebar3Transistion } from "./components/Sidebar2Transistion";

//  function App(){
//     return(
//       <div>
//          <SidebarClass1/>
//          {/* <Sidebar2Transistion/> */}
//          {/* <Sidebar3Transistion/>  */}
//          {/* diff bw delat and duration */}
//       </div>
//     )
//  }


function App() {
  return (
    <div className="h-screen bg-white dark:bg-gray-700 text-black dark:text-white">
      <button
        onClick={() => {
          document.querySelector("html").classList.toggle("dark");
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;


 //if class in insdex.html is not set to anything then light mode will render to fix it we can use dom manipulation