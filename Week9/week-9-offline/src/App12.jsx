import { useEffect,useState } from "react";

function App(){
    const [timer,showTimer]=useState(true);
   //alternative to innercontent, better than innerHTML
    return <div style={{display:"flex",background:"grey"}}>
          <Card children={"Hello Mate"}/>
          <Card >
          <div style={{color:"aqua",margin:5}}>
            How are you?
          </div>
          </Card>
          <Card>
          <div style={{color:"aqua"}}>What do you wanna post <br />
            <input type={"text"}></input>
            </div>
          </Card>
          
    </div>

}


function Card({children}){
   return <span style={{background:"black",borderRadius:10,color:"white",padding:10,margin:10}}>
         Topbar
         {children}
         Bottombar
   </span>
}


export default App;