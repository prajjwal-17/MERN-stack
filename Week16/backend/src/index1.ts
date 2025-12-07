import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port : 8080});
console.log("Hey there")

//event
wss.on("connection" , function(socket){
    console.log("user connected");
    setInterval(()=>{
        socket.send("Current price of Solana is " + Math.random()*100);
    },500)
    
})