import { SidebarClass1 } from "./components/1-basic-project";
import { Sidebar2Transistion } from "./components/Sidebar2Transistion";
import { Sidebar3Transistion } from "./components/Sidebar2Transistion";

 function App(){
    return(
      <div>
         <SidebarClass1/>
         <Sidebar2Transistion/>
        <Sidebar3Transistion/> 
         {/* diff bw delay and duration */}
      </div>
    )
 }
 export default App ;