import { useEffect, useRef, useState } from "react";
import './App.css'

function App(){

  // const [socket,setSocket]=useState(null);
  // const inputRef = useRef(null);
  
  
  // ✅ Typed state:
  // We explicitly allow TWO possible values:
  // 1) null   → before WebSocket connects
  // 2) WebSocket → after connection is established
  // Without this union type, TypeScript would lock the state to only "null"
  // and completely break `.send()` and `setSocket(ws)`
  const [socket, setSocket] = useState<WebSocket | null>(null);

    // ✅ Typed ref:
  // This tells TypeScript exactly what DOM element this ref will point to.
  // Without this, TypeScript assumes `null` forever and blocks `.value`
  const inputRef = useRef<HTMLInputElement | null>(null);


  function sendMessage(){
     // ✅ Mandatory runtime + type safety check
    // Prevents:
    // 1) Calling `.send()` before WebSocket is ready
    // 2) Crashing when `.current` is still null
    if (!socket || !inputRef.current) return;

    // ✅ Now TypeScript is guaranteed that:
    // - inputRef.current is an HTMLInputElement
    // - therefore `.value` is legal
    const message = inputRef.current.value;

     // ✅ `.send()` is now valid because socket is typed as WebSocket
      socket.send(message)
  }  

  useEffect(()=>{
     const ws=new WebSocket("ws://localhost:8080");
     setSocket(ws);
     
     ws.onmessage=(ev)=>{
       alert(ev.data);
     }
     
  },[]) // ✅ Runs once on mount only — avoids reconnect spam

   return (
    <div>
      <input ref={inputRef} type="text" placeholder="Message..."></input>
      <button onClick={sendMessage}>Send</button>
    </div>
   )
}

export default App;