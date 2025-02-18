import { useEffect, useState } from "react";
import { SidebarToggle } from "./components/SidebarToggle";


const useMediaQuery=(query)=>{
  const [matches,setMatches]=useState(false);

  useEffect(()=>{
    const media=window.matchMedia(query);
    if(media.matches!==matches){
      setMatches(media.matches)
    }
    const listener=()=>setMatches(media.matches);
    media.addListener(listener);
    return ()=>media.removeListener(listener);
  },[matches,query]);
  return matches;
}



function App(){

  const [sidebarOpen,setSidebarOpen]=useState(true);
  const isDesktop=useMediaQuery("(min-width:768px)");

  useEffect(()=>{
    if(isDesktop==false) setSidebarOpen(false);
    else setSidebarOpen(true)
  },[isDesktop])
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

 return <div className=" w-96 h-screen bg-red-100 fixed top-0 left-0 md:relative">
  <div className="cursor-pointer hover:bg-white hover:p-9 " onClick={()=>{setSidebarOpen(!sidebarOpen)}}>
    <SidebarToggle/>
  </div>
</div>
}

function MainContent(){
return (
  <div className="w-full"> 
    <div className="h-72 bg-black hidden md:block"></div>
    <div className="transition-all duration-700 grid grid-cols-11 gap-8 p-8">
      <div className="h-96 rounded-2xl shadow-lg bg-red-300 md:col-span-2 col-span-11 -translate-y-24 hidden md:block">
        {/* Add content for this section */}
      </div>
      <div className="h-96 rounded-2xl shadow-lg bg-green-300 md:col-span-6 col-span-11">
        {/* Add content for this section */}
      </div>
      <div className="h-96 rounded-2xl shadow-lg bg-yellow-300 md:col-span-3 col-span-11">
        {/* Add content for this section */}
      </div>
    </div>
  </div>
);
}

export default App;
