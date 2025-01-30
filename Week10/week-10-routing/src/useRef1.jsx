function App() {
    function focusOnInput(){
      document.getElementById("name").focus()
    }
    return <div>
      Signup
       <input id="name" type="text" />
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