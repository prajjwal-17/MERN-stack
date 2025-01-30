import {useRef,useState} from 'react'


// useref creates a refernce to a value such that when u change the value the component DOESNT re render  as in case of useState

function App() {
  const inputRef=useRef();
  function focusOnInput(){
    inputRef.current.focus();
  }
  return <div>
    Signup
     <input ref={inputRef} id="name" type="text" />
     <input type="text" />
     <button onClick={focusOnInput}>Submit</button>
  </div>
}



export default App;



/*
windows.setTimeout(function(){
    document.getElementById("name").focus()
},3000)

if we write this in inspect console the browser will focus on name input box after 3 seconds
*/