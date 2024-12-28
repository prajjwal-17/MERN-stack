const express=require("express");
const app=express();

// fs.readFile("sample.txt","utf-8")

app.get("/",function(req,res){
    // res.send("Hello World") u can only send 1 time
    res.send("<b>Hello there mate</b>")
})
app.get("/asd",function(req,res){
    res.send("Hello World from asd")
})

app.post("/",function(req,res){
    res.send("Hello World from post")
})

app.listen(3069);