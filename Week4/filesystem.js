const express=require("express");
const fs=require("fs");

const app=express();

app.get("/files/:filename" ,function(req,res){
   const name=req.params.filename;  
   contents=fs.readFile(name,'utf-8',function(err,data){
    res.json({
        data
    });
   })
});

app.listen(3002);

// format-   http://localhost:3002/files/info.txt
