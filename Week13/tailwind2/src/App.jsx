import { useState } from "react";
import { SidebarToggle } from "./components/SidebarToggle";

function App(){

  const [sidebarOpen,setSidebarOpen]=useState(true);
  return(
    <div className="flex">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <MainContent sidebarOpen={sidebarOpen}/>
    </div>
  )
}

function Sidebar({sidebarOpen,setSidebarOpen}){

if(!sidebarOpen){
  return <div className="fixed top-0 left-0">
        <div className="transition-all cursor-pointer hover:bg-white hover:p-9 " onClick={()=>{setSidebarOpen(!sidebarOpen)}}>
    <SidebarToggle/>
  </div>
  </div>
}

 return <div className="w-96 h-screen bg-red-100">
  <div className="transition-all cursor-pointer hover:bg-white hover:p-9 " onClick={()=>{setSidebarOpen(!sidebarOpen)}}>
    <SidebarToggle/>
  </div>
</div>
}

function MainContent(){
return (
  <div className="w-full"> 
    <div className="h-72 bg-black"></div>
    <div className="grid grid-cols-11 gap-8 p-8">
      <div className="h-96 rounded-2xl shadow-lg bg-red-300 col-span-2 -translate-y-24">
        {/* Add content for this section */}
      </div>
      <div className="h-96 rounded-2xl shadow-lg bg-green-300 col-span-6">
        {/* Add content for this section */}
      </div>
      <div className="h-96 rounded-2xl shadow-lg bg-yellow-300 col-span-3">
        {/* Add content for this section */}
      </div>
    </div>
  </div>
);
}

export default App;
