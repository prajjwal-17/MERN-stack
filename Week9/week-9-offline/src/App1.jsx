import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   return <div style={{color:"red"}}>Hello Mate</div>
// }

function App() {
  return (
    <div style={{ backgroundColor: "#b2bec3", 
                  display: "flex",
                
                  }}>
     
      {/* Profile Component on the top-left */}
      
      <div style={{ marginRight: 10, padding: 20 }}>
        <ProfileComponent />
      </div>
      
      {/* Posts Container centered vertically */}
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
             caption="Yosh, how do you guys feel today?"
             avatar="/prajjwalPFPnew.JPG"
             time="1h"
             postImage="PrajjwalPost.JPG"
            />
          </div>
          <div>
            <PostComponent
            author="piggiPochu"
            subtitle="2 followers"
            caption="Hey there what a beautiful day"
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
          <div style={{ marginRight: 10, padding: 20 }}>
        <ToggleMessage></ToggleMessage> 
        {/* toggle message is an example of conditional rendering */}
      </div> 
        </div>
      </div>
    </div>
  );
   
}
const style={width : 200, backgroundColor: "white", borderRadius : 10, borderColor: "gray",borderWidth:1,padding:20 ,marginTop : 10   };

const ToggleMessage=()=>{
  const[isVisible,setVisible]=useState(false);
  return <div>
    <button onClick={()=>setVisible(!isVisible)}>
      Toggle Message
    </button>
    {isVisible && <p>This message is conditionally rendered</p>}
  </div>
}

function PostComponent({ author, subtitle, caption, avatar, time, postImage }){
  return <div style={style}>
    <div style={{display:"flex"}}>
    <img src={avatar} style={{
         width: "100%",            // Ensures the image takes up the full width of the container
         height: "auto",           // Maintains the image's aspect ratio
         maxWidth: 30,        // Reasonable max width
         maxHeight: 30,       // Reasonable max height
        objectFit: "cover",
      borderRadius: 20
    }} ></img>

    <div style={{fontSize:10, marginLeft:10}}>
      <b>{author}</b>
      <div>{subtitle} </div>
      {time!==undefined && <div>{time} ago  
        <img src="https://clipart-library.com/images_k/clock-image-transparent-background/clock-image-transparent-background-14.jpg"
         alt="" style={{width:10,height:10,marginLeft:5}}/>   
         {/* conditional rendering */}
      </div>}
    </div>
    </div>
    <div style={{fontSize:12}}>
    {caption}
  </div>
    <div>
       <img 
       src={postImage} 
        alt="image" 
       style={{
         width: "100%",            // Ensures the image takes up the full width of the container
         height: "auto",           // Maintains the image's aspect ratio
         maxWidth: "600px",        // Reasonable max width
         maxHeight: "400px",       // Reasonable max height
        objectFit: "cover",       // Ensures the image scales properly within the given dimensions
  }} 
/>
    </div>
  </div>
}
function ProfileComponent() {
  return (
    <div style={{ width: 200, backgroundColor: "white", borderRadius: 20, borderColor: "gray", borderWidth: 1, paddingTop: 20, marginTop: 10, marginRight: 10 }}>
      {/* Cover Image Container: set as relative to allow positioning of the profile image */}
      <div style={{ position: "relative" }}>
        {/* Cover Image */}
        <img
          src="https://media.licdn.com/dms/image/v2/D4D16AQFBAOhUNzYqZg/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1696186360942?e=1733961600&v=beta&t=dp9xqj5A-XoliRDbVx-XKtBSEdR0GJog6KQpVNe7REQ"
          style={{ height: 50, width: 200 }} // Height and width of the cover image
          alt=""
        />
        
        {/* Profile Image */}
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQGrXLlR7cx1Zg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1696179646909?e=2147483647&v=beta&t=XBmfqqGTJIv04BgWxXu7rxZ1-oKUx8K_RMlv9mP4DxE"
          style={{
            height: 50, // Height of the profile image
            width: 50, // Width of the profile image
            borderRadius: "50%", // Makes the profile image a circle
            position: "absolute", // Allows the profile image to overlap the cover image
            bottom: -25, // Moves the profile image 25px below the bottom of the cover image (half of the profile image's height)
            left: "50%", // Horizontally positions the profile image at the center of the cover image
            transform: "translateX(-50%)", // Adjusts the position so the image is centered exactly at 50% of the cover's width
            border: "2px solid white", // Adds a white border around the profile image for a cleaner look
          }}
          alt=""
        />
      </div>
      <div style={{display:'flex',justifyContent:"center",paddingTop:15}}>
        <h4 style={{fontFamily:"sans-serif"}}>Prajjwal Rawat</h4>
      </div>
      <div style={{textAlign:"center",fontFamily:"sans-serif",paddingTop:15,fontSize:13}}>
      Ex-Machine Learning Intern @msinterfacetechnologies |Back End Web Developer |Computer Science Sophomore | Driven by Coding , ML and Sports |
      <hr style={{ borderTop: "1px solid gray", marginTop: 15 }} /> 
      </div>
      <div style={{display:"flex" ,justifyContent:"space-between",fontSize:13,padding:5}}>
        <div style={{textAlign:'left'}}>
          Profile Viewers
          <br />
          Post Impressions
        </div>

        <div style={{textAlign:'right',color:'blue',fontSize:13}}>
          91
          <br />
          276
        </div>
        </div>
        <hr style={{ borderTop: "1px solid gray", marginTop: 15 }} /> 
      <div>
        <div style={{paddingBottom:10,textAlign:'center'}}>
          <a href="/" style={{ textDecoration: "none"}}>Saved Items</a>
        </div>
        
      </div>
    </div>
  );
}


export default App