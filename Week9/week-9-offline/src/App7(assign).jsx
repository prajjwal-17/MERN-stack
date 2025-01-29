import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { PostComponent  } from './Post'
import './App.css'

// function App() {
//   return <div style={{color:"red"}}>Hello Mate</div>
// }

function App() {
  return (
    <div style={{ backgroundColor: "#b2bec3", display: "flex",}}>
      <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div>
            <PostComponent
            author="Samridhi Dangwal"
            subtitle="1m followers"
            caption="I feel like a princess because I am one!"
            avatar="/samPFP.jpg"
            time="12m"
            postImage="/Samridhi.png"
            />
          </div>
          <div>
            <PostComponent
             author="Prajjwal Rawat"
             subtitle="1.5m followers"
             caption="Yo how do you guys feel today?"
             avatar="/prajjwalPFPnew.JPG"
             time="1h"
             postImage="PrajjwalPost.JPG"
            />
          </div>
          <div>
            <PostComponent
            author="piggiPochu"
            subtitle="2 followers"
            caption="Hey there what a beautiful day!"
            avatar="/pfp.jpg"
            time="1 day"
            postImage="post.jpg" />
          </div>
          <div>
            <PostComponent
             author="Babla"
             subtitle="Promoted"
             caption="Hey there, I am a 7 time World Champion"
             avatar="/bablaPFP.png"
             postImage="/bablaPost.png"
            />
          </div>
           
        </div>
      </div>
    </div>
  );
   
}
export default App;