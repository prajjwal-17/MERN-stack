// ping / pong  or echo application
//for app1.tsx

import { WebSocketServer, WebSocket } from "ws";

const wss=new WebSocketServer({port : 8080});

wss.on("connection", function(socket){
    console.log("user connected")

    socket.on("message",(e)=>{
        console.log(e.toString());
        console.log(e.toString()==="ping");
        if(e.toString()=="ping"){
            socket.send("pong")
        }
    })
})