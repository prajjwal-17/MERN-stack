import { useEffect,useState } from "react";

function App(){
    const [timer,showTimer]=useState(true);

    return <div style={{display:"flex"}}>
          <Card innerContent={"Hello Mate"}/>
          <Card innerContent={<div style={{color:"aqua"}}>How are you</div>}/>
          <Card innerContent={<div style={{color:"aqua"}}>What do you wanna post <br />
            <input type={"text"}></input>
            </div>}/>
          
    </div>

}


function Card({innerContent}){
   return <span style={{background:"black",borderRadius:10,color:"white",padding:10}}>
         {innerContent}
   </span>
}


export default App;