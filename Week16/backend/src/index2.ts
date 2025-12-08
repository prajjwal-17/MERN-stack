import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port : 8080});
console.log("Hey there")

//event
wss.on("connection" , function(socket){
    console.log("user connected");
    setInterval(()=>{
        socket.send("Current price of Solana is " + Math.random()*100);
    },500)

    socket.on("message",(e)=>{
        console.log(e.toString())
    })
// for a message from postman we send we get <Buffer 77 68 61 74 20 69 73 20 73 6f 6c 61 6e 61 20 70 72 69 63 65> on logs
// to get a proper message we do to string
    
})