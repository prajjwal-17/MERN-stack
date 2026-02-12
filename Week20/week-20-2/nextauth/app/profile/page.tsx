"use client"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile(){
    
    const [profilepicture , setProfilepicture] = useState("")
    useEffect(()=>{
        axios.get("http://localhost:3000/api/profile",{
            headers : {
                authorization : localStorage.getItem("token")   // if this is done outside of the useeffect and use client we get an error because server doenst have acces to thw localstorage
            }
        }).then(res=>{
           setProfilepicture(res.data.avatarURL)
        })
        
    },[])

    // if we have the url like this it will be rendered first on the server 
    // and we will first see this on the browser the the original link
    const url = "http/cat";
    return <div>
        {profilepicture}
        {url}
    </div>
}
// the url we get will be client side render
// we can do auth like this but the image is not rendered onthe server but on the client