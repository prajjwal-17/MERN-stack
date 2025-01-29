import { useState } from "react";

function App(){
  return  (
     <div style={{background:"#dfe6e9", height:"100vh"}}>
        <ToggleMessage></ToggleMessage>      
        <ToggleMessage></ToggleMessage>      
        <ToggleMessage></ToggleMessage>       
        <ToggleMessage></ToggleMessage>    
        <NotificationCount></NotificationCount>  
    </div>
  );
}
const ToggleMessage=()=>{
  let [isVisible,setVisible]=useState(false);  //defining a new state variable it will return an array [true,function]
  //when the value of a state variable changes ,
  // the component that uses the state variable re-renders
  return <div>
    <button onClick={()=>setVisible(!isVisible)}>
      Toggle Message
    </button>
    {isVisible && <p>This message is conditionally rendered</p>}
  </div>
};
const NotificationCount=()=>{
    let [notifictionCount,setNotificationCount]=useState(0);
     
    function increment() {
      setNotificationCount(notifictionCount+1);
    };
    return(
      <div>
        <button onClick={increment}>Notification Count</button>
        {notifictionCount}
      </div>
    )

}

export default App;