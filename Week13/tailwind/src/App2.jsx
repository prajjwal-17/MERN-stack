
function WithDisp(){
    return <div style={{display:"flex", justifyContent:"space-between"}}>
      <div style={{background : "green"}}>First Div</div>
      <div style={{background : "red"}}>Second Div</div>
      <div style={{background : "blue"}}>Third Div</div>
    </div>
  }
  function Withoutdisp(){
    return <div >
      <div style={{background : "green"}}>First Div</div>
      <div style={{background : "red"}}>Second Div</div>
      <div style={{background : "blue"}}>Third Div</div>
    </div>
  }
  
  function App(){
    return <div>
       First Approach <WithDisp/> 
       <br />
       Second Approach <Withoutdisp/>
    </div>
  }
  
  export default App;