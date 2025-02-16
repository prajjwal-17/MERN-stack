import { Button } from "./components/Buttons";
import { Input } from "./components/Input";

function App(){
    return (
    <>
       <div className="h-screen bg-blue-700">
        <br /><br />
        <div className="flex justify-center p-10">
              <div className="text-[#2eb1b1] text-3xl font-semibold">💻Webinar</div>
              <div className="text-white text-3xl">.gg</div>
        </div>
        <div className="flex justify-center text-3xl font-bold text-white m-10">
              Verify Your Age
        </div>
        <div className="flex justify-center text-sm  text-[#506a8d] font-semibold">
              Please Confirm your birth year . The data will not be stored
        </div>
   
        <div className="flex justify-center m-2">
           <Input type={"text"} placeholder={"Enter Birth year"}/>
        </div>    
            
           
        <div className="flex justify-center m-7">
        <Button disabled={false} >Continue</Button>
        </div>
            
       </div>
    </>)
}

export default App;