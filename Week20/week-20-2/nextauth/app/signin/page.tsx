"use client" // for onclick handler

import axios from "axios"

export default function(){
    return <div>
        SignIn <br />
        <br />
        <input placeholder="Username"></input>
        <input placeholder="Password"></input>
        <button onClick={async()=>{
            const res = await axios.post("http://localhost:3000/api/signin",{
                username : "wgwgw",
                password : "gwegrhwhwr"
             })
        localStorage.setItem("token",res.data.token)
        }}>Sign In</button>
    </div>
}