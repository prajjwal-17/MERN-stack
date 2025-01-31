import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react"

const BulbContext=createContext()
 
function App(){
  const [bulbOn,setBulbon]=useState(true);
    return <div>
     <BulbContext.Provider value={{
      bulbOn:bulbOn,
      setBulbon:setBulbon
     }}>
       <Light/>
     </BulbContext.Provider>
    </div>
}

function Light(){
 
    return <div>
        <LightBulb/>
        <LightSwitch/>
    </div>
}

function LightBulb(){
  const {bulbOn}=useContext(BulbContext)
    return <div>
       {bulbOn?"Bulb On":"Bulb Off"}
       {bulbOn ? <img src='https://www.w3schools.com/js/pic_bulbon.gif'></img> : <img src="https://www.w3schools.com/js/pic_bulboff.gif"></img>}
    </div>
}
function LightSwitch(){
    const {bulbOn,setBulbon}=useContext(BulbContext)
    function toggle(){
      setBulbon(currentState=>!currentState)
    }

    return <div>
        <button onClick={toggle}>Toggle the Bulb</button>
    </div>
}


export default App;

// thus we got rid of prop drilling by using context apis
// steps==> createContext==>Wrap in the Provider==> useContext