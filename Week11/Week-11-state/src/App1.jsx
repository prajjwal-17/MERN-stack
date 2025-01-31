import { useState } from "react"
// basically we have to find lowest common ancestor  
function App(){
    return <div>
     <Light/>
    </div>
}

function Light(){
  const [bulbOn,setBulbon]=useState(true);
    return <div>
        <LightBulb bulbOn={bulbOn}/>
        <LightSwitch setBulbon={setBulbon}/>

    {/* bulb on is a prop to bulb state */}
    </div>
}

function LightBulb({bulbOn}){
    // const [bulbOn,setBulbon]=useState(true);
    return <div>
       {bulbOn?"Bulb On":"Bulb Off"}
       {bulbOn ? <img src='https://www.w3schools.com/js/pic_bulbon.gif'></img> : <img src="https://www.w3schools.com/js/pic_bulboff.gif"></img>}
    </div>
}
function LightSwitch({setBulbon}){

    function toggle(){
      setBulbon(currentState=>!currentState)
    }

    return <div>
        <button onClick={toggle}>Toggle the Bulb</button>
    </div>
}


export default App;